import {useState} from 'react'
import FaList from 'react-icons/lib/fa/list'

import theme from '../../styles/theme'

import Tuto from '../tuto'
import TryList from '../demo/try-list'
import Section from '../section'

import {useFetch} from '../hooks/fetch'
import {useQuery} from '../hooks/query'

const DepartementsList = () => {
  const [code, setCode] = useState('28')
  const [query] = useQuery(code, code => `regions/${code}/departements`)
  const [response, loading, error] = useFetch(query, false)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  return (
    <Section background='white'>
      <div id='departements-list'>
        <Tuto
          title='Liste de departements par région'
          description=''
          icon={<FaList />}
          exemple={`https://geo.api.gouv.fr/${query}`}
          results={response}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>/regions/[codeRegion]/departements</span> permet de récuperer <b>la liste des départements</b> associées à une région.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='départements dans cette région'
          label='Région'
          query='regions?fieds=code'
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

export default DepartementsList
