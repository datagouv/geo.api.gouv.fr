import {useState, useEffect} from 'react'
import {List} from 'react-feather'

import theme from '../../styles/theme'

import {getRegionDepartements, getRegions} from '../../lib/api/geo'

import {useFetch} from '../hooks/fetch'
import {useQuery} from '../hooks/query'

import Tuto from '../tuto'
import TryList from '../demo/try-list'
import Section from '../section'

const DepartementsList = () => {
  const [code, setCode] = useState('28')
  const [regions, setRegions] = useState({url: '', option: null})
  const [url, options] = useQuery(code, code => getRegionDepartements(code))
  const [response, loading, error] = useFetch(url, options, false)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  useEffect(() => {
    const regions = getRegions()
    setRegions(regions)
  }, [])

  return (
    <Section background='white'>
      <div id='departements-list'>
        <Tuto
          title='Liste de departements par région'
          description=''
          icon={<List />}
          exemple={url}
          results={response}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>{"/regions/{codeRegion}/departements"}</span> permet de récuperer <b>la liste des départements</b> associées à une région.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='départements dans cette région'
          label='Région'
          query={regions}
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
