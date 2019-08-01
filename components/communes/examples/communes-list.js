import {useState, useEffect} from 'react'
import FaList from 'react-icons/lib/fa/list'

import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import Section from '../../section'
import TryList from '../../demo/try-list'
import {useSearch} from '../../hooks/search'

const CommunesList = () => {
  const [code, setCode] = useState('01')
  const [query, setQuery] = useState(`departements/${code}/communes`)
  const [response, loading, error] = useSearch(query, true)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  useEffect(() => {
    setQuery(`departements/${code}/communes`)
  }, [code])

  return (
    <Section background='grey'>
      <div id='communes-list'>
        <Tuto
          title='Liste de communes par départements'
          description=''
          icon={<FaList />}
          exemple={`https://geo.api.gouv.fr/${query}`}
          results={response}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>/departements/[codeDepartement]/communes</span> permet de récuperer <b>la liste des communes</b> associées à un département.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='communes dans ce département'
          label='Départements'
          query='departements?fieds=code'
          loading={loading}
          error={error}
          handleSelect={handleSelect} />
      </div>

      <style jsx>{`
          .field {
            background: ${theme.primary};
            color: ${theme.colors.white};
            border-radius: 2px;
            padding: 0.1em 0.3em;
          }
      `}</style>
    </Section>
  )
}

export default CommunesList
