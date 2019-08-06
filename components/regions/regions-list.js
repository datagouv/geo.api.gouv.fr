import FaList from 'react-icons/lib/fa/list'

import theme from '../../styles/theme'

import Tuto from '../tuto'
import Section from '../section'
import Notification from '../notification'
import {useFetch} from '../hooks/fetch'

const RegionsList = () => {
  const [response, loading, error] = useFetch('regions', true)

  return (
    <Section background='white'>
      <div id='regions-list'>
        <Tuto
          title='Liste des régions'
          description=''
          icon={<FaList />}
          exemple='https://geo.api.gouv.fr/regions'
          results={response}
          side='left'
          loading={loading}
        >
          <p>
            <span className='field'>/regions</span> permet de récuperer <b>la liste des régions</b>.
          </p>
          {error &&
          <div className='error'>
            <Notification message={error.message} type='error' />
          </div>
          }
        </Tuto>
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

export default RegionsList
