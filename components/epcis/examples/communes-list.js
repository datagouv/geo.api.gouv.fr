import {useState, useEffect} from 'react'
import {List} from 'react-feather'

import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import Section from '../../section'
import TryList from '../../demo/try-list'

import {useFetch} from '../../hooks/fetch'
import {useQuery} from '../../hooks/query'
import {getEpcis, getEpciCommunes} from '../../../lib/api/geo'

function CommunesList() {
  const [code, setCode] = useState('244400404')
  const [epcis, setEpcis] = useState({url: '', option: null})
  const [url, options] = useQuery(code, code => getEpciCommunes(code))
  const [response, loading, error] = useFetch(url, options, false)

  const handleSelect = option => {
    const code = option.split(' ')[0]
    setCode(code)
  }

  useEffect(() => {
    const epcis = getEpcis({codeDepartement: '44'})
    setEpcis(epcis)
  }, [])

  return (
    <Section background='grey'>
      <div id='communes-list'>
        <Tuto
          title='Liste de communes par EPCI'
          description=''
          icon={<List />}
          exemple={url}
          results={response || []}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>/epcis/[codeEpci]/communes</span> permet de récuperer <b>la liste des communes</b> associées à un EPCI.
          </p>
        </Tuto>

        <TryList
          value={code}
          items={response || []}
          description='communes dans cet EPCI'
          label='EPCI'
          query={epcis}
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
