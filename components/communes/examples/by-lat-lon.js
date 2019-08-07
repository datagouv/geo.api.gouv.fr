import {useState} from 'react'
import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import {getCommunes} from '../../../lib/api/geo'

import {useFetch} from '../../hooks/fetch'
import {useQuery} from '../../hooks/query'

import Section from '../../section'
import Tuto from '../../tuto'

import TryGeo from '../demo/try-geo'

function getInfos(position) {
  if (position) {
    const fields = ['code', 'nom', 'codesPostaux', 'surface', 'population', 'centre', 'contour']
    const query = getCommunes({
      fields,
      params: {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
    })

    return query
  }
}

const ByLatLon = ({title, id, icon}) => {
  const [position, setPosition] = useState(null)
  const [url, options] = useQuery(position, getInfos)
  const [response, loading, error] = useFetch(url, options, false)

  return (
    <Section>
      <div id={id}>
        <Tuto
          title={title}
          description='Il est possible de faire une recherche géographique à l’aide de coordonnées.'
          icon={icon}
          exemple={url}
          results={response || []}
          loading={loading}
          side='left'
        >
          <div>
            <p>En utilisant les variables <span className='field'>lat</span> et <span className='field'>lon</span> l’api renverra la commune correspondante.</p>
          </div>
        </Tuto>

        <TryGeo
          commune={response ? response[0] : null}
          locateUser={setPosition}
          fetchError={error}
        />
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

ByLatLon.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByLatLon
