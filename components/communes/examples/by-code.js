import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope'

import theme from '../../../styles/theme'

import Section from '../../section'
import Tuto from '../../tuto'
import TryPostalCode from '../demo/try-postal-code'

class ByCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '78000',
      results: null,
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
    const url = 'https://geo.api.gouv.fr/communes?codePostal=' + input
    const options = {
      headers: {
        Accept: 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }

    if (input) {
      try {
        this.setState({loading: true})
        const response = await fetch(url, options)
        const contentType = response.headers.get('content-type')
        if (response.ok && contentType && contentType.indexOf('application/json') !== -1) {
          const results = await response.json()
          this.setState({results})
        }
      } catch (err) {
        this.handleError(err)
      }
    } else {
      this.handleError(new Error('Le champ est vide.'))
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
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
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
