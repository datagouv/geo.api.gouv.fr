import React from 'react'
import debounce from 'debounce'
import FaTag from 'react-icons/lib/fa/tag'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Section from '../../section'
import TryName from '../demo/try-name'
import Tuto from '../../tuto'

class ByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 'Nantes',
      results: [],
      loading: false,
      boost: true,
      error: null
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleBoost = this.handleBoost.bind(this)

    this.handleSearch = debounce(this.handleSearch, 200)
  }

  componentDidMount() {
    this.update()
  }

  update() {
    this.setState({results: [], loading: true})
    this.setState(state => {
      state.query = `communes?nom=${state.input}&fields=departement${state.boost ? '&boost=population' : ''}`
      this.handleSearch(state.query)
    })
  }

  handleSelect(input) {
    this.setState({input})
    this.update()
  }

  handleInput(input) {
    this.setState({input})
    this.update()
  }

  async handleSearch() {
    const {query} = this.state
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

  handleBoost() {
    this.setState(state => {
      state.boost = !state.boost
      this.update()
    })
  }

  render() {
    const {input, query, results, boost, loading, error} = this.state

    return (
      <Section background='white'>
        <Tuto
          title='Recherche par nom'
          description='La variable nom vous permet d’effectuer une recherche de communes par nom.'
          icon={<FaTag />}
          exemple={`https://geo.api.gouv.fr/${query}`}
          results={results}
          tips='Il est possible d’utiliser la recherche par nom pour faire de l’autocomplétion.'
          side='right'
          loading={loading}
        >
          <div>
            <p>L’option <span className='field'>boost=population</span> vous permet de prioriser les résultats avec une plus grande population.</p>
            <p>Cette option prend tout son sens lorsque l’on recherche des communes comme <b>Nantes</b> par exemple.</p>
          </div>
        </Tuto>
        <TryName
          value={input}
          results={results}
          boost={boost}
          loading={loading}
          error={error}
          handleChange={this.handleInput}
          handleSelect={this.handleSelect}
          handleBoost={this.handleBoost} />
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

export default ByName