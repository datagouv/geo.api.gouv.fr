import React from 'react'
import debounce from 'debounce'

import SearchInput from '../../search-input'
import SwitchInput from '../../switch-input'
import TryContainer from '../../try-container'

class TryName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      results: [],
      loading: false,
      boost: true
    }

    this.updateValue = this.updateValue.bind(this)
    this.search = this.search.bind(this)
    this.toggleBoost = this.toggleBoost.bind(this)

    this.search = debounce(this.search, 200)
  }

  updateValue(value) {
    this.setState({value, results: [], loading: true}, () => {
      const {boost} = this.state

      const url = `https://geo.api.gouv.fr/communes?nom=${value}&fields=departement${boost ? '&boost=population' : ''}`
      this.search(url)
    })
  }

  search(url) {
    const options = {
      headers: {
        Accept: 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }

    fetch(url, options).then(response => {
      const contentType = response.headers.get('content-type')

      if (contentType && contentType.indexOf('application/json') !== -1) {
        response.json().then(json => {
          this.setState({
            results: json.splice(0, 5) || [],
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

  toggleBoost() {
    this.setState(state => ({
      boost: !state.boost
    }))
  }

  render() {
    const {value, loading, results, boost} = this.state

    return (
      <TryContainer>
        <SearchInput
          value={value}
          results={results}
          loading={loading}
          placeholder='Rechercher une commune…'
          search={this.updateValue} />
        <SwitchInput handleChange={this.toggleBoost} label='Boost de population' isChecked={boost} />
      </TryContainer>
    )
  }
}

export default TryName
