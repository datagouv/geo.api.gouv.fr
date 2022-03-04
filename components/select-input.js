import React from 'react'
import PropTypes from 'prop-types'

class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    renderOption: PropTypes.func,
    options: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: '',
    label: null,
    renderOption: option => <option key={`option-${option}`}>{option}</option>
  }

  handleChange(e) {
    const {handleSelect} = this.props
    handleSelect(e.target.value)
  }

  render() {
    const {value, label, options, renderOption} = this.props
    const selectedDepartement = options.filter(option => option.code === value)[0]
    const defaultValue = selectedDepartement && `${selectedDepartement.code} - ${selectedDepartement.nom}`

    return (
      <div>
        {label && <label>{label}</label>}
        <select onChange={this.handleChange} value={defaultValue}>
          {options.map(renderOption)}
        </select>
      </div>
    )
  }
}

export default SelectInput
