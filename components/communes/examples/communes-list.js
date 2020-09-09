import {useState, useEffect} from 'react'
import {List} from 'react-feather'

import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import Section from '../../section'
import TryList from '../../demo/try-list'

import {useFetch} from '../../hooks/fetch'
import {useQuery} from '../../hooks/query'
import {getDepartements, getDepartementCommunes} from '../../../lib/api/geo'

const CommunesList = () => {
  const [code, setCode] = useState('01')
  const [departements, setDepartements] = useState({url: '', option: null})
  const [url, options] = useQuery(code, code => getDepartementCommunes(code))
  const [response, loading, error] = useFetch(url, options, false)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  useEffect(() => {
    const departements = getDepartements()
    setDepartements(departements)
  }, [])

  return (
    <Section background='grey'>
      <div id='communes-list'>
        <Tuto
          title='Liste de communes par départements'
          description=''
          icon={<List />}
          exemple={url}
          results={response || []}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>{"/departements/{codeDepartement}/communes"}</span> permet de récuperer <b>la liste des communes</b> associées à un département.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='communes dans ce département'
          label='Départements'
          query={departements}
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
