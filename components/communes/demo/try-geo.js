import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Loader from '../../loader'
import Notification from '../../notification'
import TryContainer from '../../try-container'
import Commune from './commune'

const LeafletMap = dynamic(import('../../leaflet-map'), {
  ssr: false,
  loading: () => (
    <div style={{textAlign: 'center', paddingTop: 20}}>
      Chargement…
    </div>
  )
})

const TryGeo = ({coords, results, loading, error, locateUser}) => {
  // eslint-disable-next-line no-unused-vars
  const commune = results.length > 0 ? results[0] : null

  return (
    <TryContainer error={error}>
      <div className='container'>
        {commune ?
          <LeafletMap
            data={commune.contour}
            position={[coords.latitude, coords.longitude]}
            center={commune.centre.coordinates.reverse()}
            zoom={12.5} /> :
          <LeafletMap />
        }

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
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-flow: wrap:
        }

        .container > div {
          width: 50%;
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
          .container {
            flex-direction: column;
          }

          .container div {
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
  results: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  locateUser: PropTypes.func.isRequired
}

TryGeo.defaultProps = {
  coords: null,
  results: [],
  error: null,
  loading: false
}

export default TryGeo
