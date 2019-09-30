import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import computeBbox from '@turf/bbox'

import Mapbox from '../../mapbox'

import Loader from '../../loader'
import Notification from '../../notification'
import TryContainer from '../../try-container'
import ContourMap from '../../mapbox/contour-map'

import {useGeolocation} from '../../hooks/geolocation'
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

const TryGeo = ({commune, locateUser, fetchError}) => {
  const [position, handleLocation, loading, locationError] = useGeolocation()
  const [bbox, setBbox] = useState(null)
  const [contour, setContour] = useState(null)

  const error = fetchError || locationError

  useEffect(() => {
    locateUser(position)
  }, [locateUser, position])

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
                coords={position ? position.coords : null}
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
            <Commune commune={commune} onClick={handleLocation} />
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
        }

        .try-geo-map {
          position: relative;
          flex: 1;
          height: 400px;
        }

        .action {
          flex: 1;
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
  commune: PropTypes.object,
  fetchError: PropTypes.object,
  locateUser: PropTypes.func.isRequired
}

TryGeo.defaultProps = {
  commune: null,
  fetchError: null
}

export default TryGeo
