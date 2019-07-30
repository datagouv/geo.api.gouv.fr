import React from 'react'
import PropTypes from 'prop-types'

import api from '../../../lib/api'

import SelectInput from '../../select-input'
import TryContainer from '../../try-container'

class TryDepartementsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      regions: [],
      demoError: null
    }

    this.state = {regions: []}
    this.getDepartement = this.getDepartement.bind(this)
    this.renderOption = this.renderOption.bind(this)
  }

  componentDidMount() {
    this.getDepartement()
  }

  async getDepartement() {
    try {
      const results = await api('regions?fieds=code')
      this.setState({regions: results})
    } catch (error) {
      this.setState({
        regions: [],
        demoError: 'Une erreur est survenue, essayez de recharcher la page.'
      })
    }
  }

  renderOption(option) {
    return <option key={`option-${option.code}`}>{option.code} - {option.nom}</option>
  }

  render() {
    const {value, results, handleSelect, error} = this.props
    const {regions, demoError} = this.state

    return (
      <TryContainer error={error || demoError}>
        <p><b>{results.length}</b> départements dans cette région</p>
        <SelectInput
          value={value}
          label='Région'
          options={regions}
          handleSelect={handleSelect}
          renderOption={this.renderOption} />
      </TryContainer>
    )
  }
}

TryDepartementsList.propTypes = {
  value: PropTypes.string,
  results: PropTypes.array,
  error: PropTypes.object,
  handleSelect: PropTypes.func.isRequired
}

TryDepartementsList.defaultProps = {
  value: '',
  results: null,
  error: null
}

export default TryDepartementsList
