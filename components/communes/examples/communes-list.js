import React from 'react'
import debounce from 'debounce'
import FaList from 'react-icons/lib/fa/list'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import TryCommunesList from '../demo/try-communes-list'
import Section from '../../section'

class CommunesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      code: '01',
      results: [],
      loading: false,
      error: null
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.handleSearch = debounce(this.handleSearch, 200)
  }

  componentDidMount() {
    this.update()
  }

  update() {
    this.setState({results: [], loading: true, error: null})
    this.setState(state => {
      state.query = `departements/${state.code}/communes`
      this.handleSearch(state.query)
    })
  }

  handleSelect(option) {
    this.setState({code: option.split(' ')[0]})
    this.update()
  }

  async handleSearch() {
    const {query} = this.state
    try {
      const results = await api(query)
      this.setState({
        results: results || []
      })
    } catch (error) {
      this.setState({
        results: [],
        error
      })
    }

    this.setState({loading: false})
  }

  render() {
    const {code, query, results, loading, error} = this.state

    return (
      <Section background='grey'>
        <div id='communes-list'>
          <Tuto
            title='Liste de communes par départements'
            description=''
            icon={<FaList />}
            exemple={`https://geo.api.gouv.fr/${query}`}
            results={results}
            side='left'
            loading={loading}
          >
            <p>
              <span className='field'>/departements/[codeDepartement]/communes</span> permet de récuperer <b>la liste des communes</b> associées à un département.
            </p>
          </Tuto>

          <TryCommunesList
            value={code}
            results={results}
            loading={loading}
            error={error}
            handleSelect={this.handleSelect} />
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

export default CommunesList
