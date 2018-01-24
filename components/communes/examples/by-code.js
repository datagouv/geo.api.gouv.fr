import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Section from '../../section'
import Tuto from '../../tuto'
import TryPostalCode from '../demo/try-postal-code'

class ByCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '78000',
      results: [],
      loading: false,
      error: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.handleSearch()
  }

  handleInput(input) {
    this.setState({input})
  }

  async handleSearch() {
    const {input} = this.state
    const query = 'communes?codePostal=' + input

    if (input) {
      try {
        const results = await api(query)
        this.setState({results})
      } catch (err) {
        this.setState({
          error: err,
          results: []
        })
      }
    } else {
      this.setState({
        error: new Error('Le champ est vide.'),
        results: []
      })
    }
    this.setState({loading: false})
  }

  render() {
    const {input, results, error, loading} = this.state
    return (
      <Section background='grey'>
        <Tuto
          title='Recherche par code postal'
          description='Il est possible de rechercher une commune avec son code postal.'
          icon={<FaEnvelope />}
          exemple={'https://geo.api.gouv.fr/communes?codePostal=' + input}
          results={results}
          side='left'
          loading={loading}
        >
          <div>
            La variable <span className='field'>codePostal</span> permet de récuperer <b>la liste des communes</b> associées à un code postal.
          </div>
        </Tuto>

        <TryPostalCode
          input={input}
          onChange={this.handleInput}
          onSubmit={this.handleSearch}
          error={error}
          loading={loading} />

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

export default ByCode
