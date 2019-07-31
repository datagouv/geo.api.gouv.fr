import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import computeBbox from '@turf/bbox'

import Mapbox from '../../mapbox'

import Loader from '../../loader'
import Notification from '../../notification'
import TryContainer from '../../try-container'
import ContourMap from '../../mapbox/contour-map'

import Commune from './commune'

function contoursToGeoJson(communes) {
  const communesWithCtr = communes.filter(commune => commune.contour)

  return {
    type: 'FeatureCollection',
    features: communesWithCtr.map(commune => communeContour(commune))
  }
}

function communeContour(commune) {
  const {contour, code, nom} = commune
  return {
    id: code,
    type: 'Feature',
    geometry: contour,
    properties: {
      code,
      nom
    }
  }
}

const TryGeo = ({coords, commune, loading, error, locateUser}) => {
  const [bbox, setBbox] = useState(null)
  const [contour, setContour] = useState(null)

  useEffect(() => {
    if (commune) {
      setBbox(computeBbox(commune.contour))
      setContour(contoursToGeoJson([commune]))
    }
  }, [commune])

  return (
    <TryContainer>
      <div className='try-container'>
        <div className='try-geo-map'>
          <Mapbox error={error ? error.message : null} bbox={bbox}>
            {({...mapboxProps}) => (
              <ContourMap
                {...mapboxProps}
                contour={contour}
                coords={coords}
              />
            )}
          </Mapbox>
        </div>

        <div className='action'>
          {loading ?
            <div className='loading'>
              <Notification message='Le temps de chargement n’est pas représentatif des performances de l’API ' type='info' />
              <Loader size='big' text='Chargement…' />
            </div> :
            <Commune commune={commune} onClick={locateUser} />
          }
        </div>

      </div>
      <style jsx>{`
        .try-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-flow: wrap;
        }

        .try-container > div {
          width: 50%;
        }

        .try-geo-map {
          height: 400px;
        }

        .action {
          padding: 1em 2em;
          text-align: center;
        }

        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 768px) {
          .try-container {
            flex-direction: column;
          }

          .try-container div {
            width: 100%;
          }
        }
        `}</style>
    </TryContainer>
  )
}

TryGeo.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  commune: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  locateUser: PropTypes.func.isRequired
}

TryGeo.defaultProps = {
  coords: null,
  commune: null,
  error: null,
  loading: false
}

export default TryGeo
