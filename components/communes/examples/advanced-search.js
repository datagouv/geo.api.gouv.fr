import React from 'react'
import FaSliders from 'react-icons/lib/fa/sliders'

import api from '../../../lib/api'

import Section from '../../section'
import Tuto from '../../tuto'
import TryAdvanced from '../demo/try-advanced'

const fieldsList = [
  'code',
  'codeDepartement',
  'codeRegion',
  'nom',
  'codesPostaux',
  'surface',
  'population',
  'centre',
  'contour',
  'departement',
  'region'
]

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
    const {fields, results, loading, error} = this.state
    return (
      <Section background='white'>
        <Tuto
          title='Recherche avancée'
          description='Le paramètre fields vous permet de filtrer les informations.'
          icon={<FaSliders />}
          exemple={`https://geo.api.gouv.fr/communes?nom=Versailles${fields ? '&fields=' + fields.join(',') : ''}`}
          results={results}
          tips='Le paramètre format permet de préciser un format de sortie des données (json/geojson).'
          warning='Le format GeoJSON implique de choisir une géométrie principale. Par défaut il s’agit du centre. Cela peut être changé en ajoutant le paramètre geometry=contour.'
          loading={loading}
          side='right'
        >

          <div>
            <div><b>Champs possibles</b> :</div>
            <ul>
              {fieldsList.map(field => <li key={field}>{field}</li>)}
            </ul>
          </div>
        </Tuto>

        <TryAdvanced fields={fieldsList} selectedFields={fields} selectField={this.handleSelect} error={error} />
      </Section>
    )
  }
}

export default AdvancedSearch
