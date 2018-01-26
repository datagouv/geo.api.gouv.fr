import React from 'react'
import debounce from 'debounce'
import FaCompass from 'react-icons/lib/fa/compass'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Section from '../../section'
import TryGeo from '../demo/try-geo'
import Tuto from '../../tuto'

class ByLatLon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: null,
      results: [],
      loading: false,
      error: null
    }
    this.handleLocation = this.handleLocation.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.handleSearch = debounce(this.handleSearch, 200)
  }

  handleLocation() {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(this.handleSearch, error => this.setState({error}))
  }

  async handleSearch(position) {
    const latLon = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude
    const query = 'communes?fields=code,nom,codesPostaux,surface,population,centre,contour&'

    this.setState({position})

    try {
      const results = await api(query + latLon)
      this.setState({results})
    } catch (err) {
      this.setState({
        error: err,
        results: []
      })
    }
    this.setState({loading: false})
  }

  render() {
    const {position, results, error, loading} = this.state
    const latLon = position ? 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude : ''

    return (
      <Section background='grey'>
        <Tuto
          title='Recherche géographique'
          description='Il est possible de faire une recherche géographique à l’aide de coordonnées.'
          icon={<FaCompass />}
          exemple={`https://geo.api.gouv.fr/communes?${latLon}`}
          results={results}
          loading={loading}
          side='left'
        >
          <div>
            <p>En utilisant les variables <span className='field'>lat</span> et <span className='field'>lon</span> l’api renverra la commune correspondante.</p>
          </div>
        </Tuto>

        <TryGeo coords={position ? position.coords : null} results={results} locateUser={this.handleLocation} error={error} loading={loading} />

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
}

export default ByLatLon
