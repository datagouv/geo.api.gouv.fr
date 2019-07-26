import React from 'react'
import PropTypes from 'prop-types'

import api from '../../../lib/api'

import SelectInput from '../../select-input'
import TryContainer from '../../try-container'

class TryCommunesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      departements: [],
      demoError: null
    }

    this.state = {departements: []}
    this.getDepartement = this.getDepartement.bind(this)
    this.renderOption = this.renderOption.bind(this)
  }

  componentDidMount() {
    this.getDepartement()
  }

  async getDepartement() {
    try {
      const results = await api('departements?fieds=code')
      this.setState({departements: results})
    } catch (error) {
      this.setState({
        departements: [],
        demoError: 'Une erreur est survenue, essayez de recharcher la page.'
      })
    }
  }

  renderOption(option) {
    return <option key={`option-${option.code}`}>{option.code} - {option.nom}</option>
  }

  render() {
    const {value, results, handleSelect, error} = this.props
    const {departements, demoError} = this.state

    return (
      <TryContainer error={error || demoError}>
        <p><b>{results.length}</b> communes dans ce département</p>
        <SelectInput
          value={value}
          label='Départements'
          options={departements}
          handleSelect={handleSelect}
          renderOption={this.renderOption} />
      </TryContainer>
    )
  }
}

TryCommunesList.propTypes = {
  value: PropTypes.string,
  results: PropTypes.array,
  error: PropTypes.object,
  handleSelect: PropTypes.func.isRequired
}

TryCommunesList.defaultProps = {
  value: '',
  results: null,
  error: null
}

export default TryCommunesList
