import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'

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
      query: '',
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
    const fields = 'communes?fields=code,nom,codesPostaux,surface,population,centre,contour&'
    const query = fields + latLon

    this.setState({query, position, error: null})

    try {
      const results = await api(query)
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
    const {title, id, icon} = this.props
    const {query, position, results, error, loading} = this.state

    return (
      <Section background='grey'>
        <div id={id}>
          <Tuto
            title={title}
            description='Il est possible de faire une recherche géographique à l’aide de coordonnées.'
            icon={icon}
            exemple={`https://geo.api.gouv.fr/${query}`}
            results={results}
            loading={loading}
            side='left'
          >
            <div>
              <p>En utilisant les variables <span className='field'>lat</span> et <span className='field'>lon</span> l’api renverra la commune correspondante.</p>
            </div>
          </Tuto>

          <TryGeo
            coords={position ? position.coords : null}
            results={results}
            locateUser={this.handleLocation}
            error={error}
            loading={loading} />
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
}

ByLatLon.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByLatLon
