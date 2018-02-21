import React from 'react'
import debounce from 'debounce'
import FaList from 'react-icons/lib/fa/list'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Tuto from '../../tuto'
import Section from '../../section'
import Notification from '../../notification'

class RegionsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      loading: false,
      error: null
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSearch = debounce(this.handleSearch, 200)
  }

  componentDidMount() {
    this.handleSearch()
  }

  async handleSearch() {
    try {
      const results = await api('regions')
      this.setState({
        results: results || []
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
    const {results, loading, error} = this.state

    return (
      <Section background='white'>
        <div id='regions-list'>
          <Tuto
            title='Liste des régions'
            description=''
            icon={<FaList />}
            exemple='https://geo.api.gouv.fr/regions'
            results={results}
            side='left'
            loading={loading}
          >
            <p>
              <span className='field'>/regions</span> permet de récuperer <b>la liste des régions</b>.
            </p>
            {error &&
              <div className='error'>
                <Notification message={error.message} type='error' />
              </div>
              }
          </Tuto>
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

export default RegionsList
