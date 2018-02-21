import React from 'react'
import PropTypes from 'prop-types'

import api from '../../../lib/api'

import Section from '../../section'
import Tuto from '../../tuto'
import TryAdvanced from '../demo/try-advanced'

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      results: [],
      loading: false,
      error: null
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.handleSearch()
  }

  componentDidUpdate(prevProps, prevState) {
    const {fields} = this.state

    if (fields !== prevState.fields) {
      this.handleSearch()
    }
  }

  handleSelect(field) {
    this.setState(state => {
      const fields = [...state.fields]
      if (fields.includes(field)) {
        const index = fields.indexOf(field)
        fields.splice(index, 1)
      } else {
        fields.push(field)
      }
      return {fields}
    })
  }

  async handleSearch() {
    const {fields} = this.state
    const query = `communes?nom=Versailles${fields ? '&fields=' + fields.join(',') : ''}`

    this.setState({loading: true})
    try {
      const results = await api(query)
      this.setState({
        results: results.splice(0, 5) || []
      })
    } catch (err) {
      this.setState({
        results: [],
        error: err
      })
    }
    this.setState({loading: false})
  }

  render() {
    const {title, id, icon} = this.props
    const {fields, results, loading, error} = this.state

    return (
      <Section background='white'>
        <div id={id}>
          <Tuto
            title={title}
            description='Le paramètre fields vous permet de filtrer les informations.'
            icon={icon}
            exemple={`https://geo.api.gouv.fr/communes?nom=Versailles${fields ? '&fields=' + fields.join(',') : ''}`}
            results={results}
            tips='Le paramètre format permet de préciser un format de sortie des données (json/geojson).'
            warning='Le format GeoJSON implique de choisir une géométrie principale. Par défaut il s’agit du centre. Cela peut être changé en ajoutant le paramètre geometry=contour.'
            loading={loading}
            side='right'
          />

          <TryAdvanced selectedFields={fields} selectField={this.handleSelect} error={error} />
        </div>
      </Section>
    )
  }
}

AdvancedSearch.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default AdvancedSearch
