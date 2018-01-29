import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import TryContainer from '../../try-container'

class TryAdvanced extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {selectField} = this.props
    selectField(e.target.value)
  }

  render() {
    const {fields, selectedFields, error} = this.props

    return (
      <TryContainer error={error}>
        <div className='fields'>
          {fields.map(field => (
            <div key={field} className='field'>
              <input type='radio' value={field} checked={selectedFields.includes(field)} onClick={this.handleChange} />
              <label className='label-inline'>{field}</label>
            </div>
          ))}
        </div>
        <style jsx>{`
          .fields {
            display: flex;
            justify-content: space-between;
            flex-flow: wrap;
            text-align: center;
          }

          .field {
            margin: 0 1em;
          }

          .field:hover {
            cursor: pointer;
          }

          .selected {
            background: ${theme.primary},
            color: ${theme.colors.white}
          }
          `}</style>
      </TryContainer>
    )
  }
}

TryAdvanced.propTypes = {
  fields: PropTypes.array.isRequired,
  selectField: PropTypes.func.isRequired,
  selectedFields: PropTypes.array,
  error: PropTypes.object
}

TryAdvanced.defaultProps = {
  selectedFields: [],
  error: null
}

export default TryAdvanced
