import React from 'react'
import debounce from 'debounce'
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

class TryGeo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: null,
      results: [],
      loading: false,
      error: false
    }
    this.handleLocation = this.handleLocation.bind(this)
    this.locateUser = this.locateUser.bind(this)

    this.locateUser = debounce(this.locateUser, 200)
  }

  handleLocation() {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(this.locateUser, error => this.setState({error}))
  }

  locateUser(position) {
    const request = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude
    const url = 'https://geo.api.gouv.fr/communes?fields=code,nom,codesPostaux,surface,population,centre,contour&'
    const options = {
      headers: {
        Accept: 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }

    this.setState({position})

    fetch(url + request, options).then(response => {
      const contentType = response.headers.get('content-type')

      if (contentType && contentType.indexOf('application/json') !== -1) {
        response.json().then(json => {
          this.setState({
            results: json,
            loading: false
          })
        })
      } else {
        this.setState({
          results: [],
          loading: false
        })
      }
    })
  }

  render() {
    // TODO: use `error` state and remove the eslint comment
    // eslint-disable-next-line no-unused-vars
    const {position, results, loading, error} = this.state
    const commune = results.length > 0 ? results[0] : null

    return (
      <TryContainer>
        <div className='container'>
          {commune ?
            <LeafletMap
              data={commune.contour}
              position={[position.coords.latitude, position.coords.longitude]}
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
              <Commune commune={commune} onClick={this.handleLocation} />
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
}

export default TryGeo
