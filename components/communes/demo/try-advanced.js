import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import TryContainer from '../../try-container'

const codeFields = [
  'codeDepartement',
  'departement',
  'codeRegion',
  'region'
]

const geoFields = [
  'surface',
  'centre',
  'contour'
]

const infosFields = [
  'population',
  'codesPostaux'
]

const cats = [
  {name: 'Relation', fields: codeFields},
  {name: 'Géométrie', fields: geoFields},
  {name: 'informations', fields: infosFields}
]

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
    const {selectedFields, error} = this.props

    return (
      <TryContainer error={error}>
        <div className='cat'>
          <div className='fields'>
            <div key='code' className='field default'>
              <input type='checkbox' value='code' defaultChecked disabled />
              <label className='label-inline'>code</label>
            </div>

            <div key='nom' className='field default'>
              <input type='checkbox' value='nom' defaultChecked disabled />
              <label className='label-inline'>nom</label>
            </div>
          </div>
        </div>

        {cats.map(cat => (
          <div key={cat.name} className='cat'>
            <h4>{cat.name}</h4>
            <div className='fields'>
              {cat.fields.map(field => (
                <div key={field} className='field'>
                  <input type='checkbox' value={field} checked={selectedFields.includes(field)} onClick={this.handleChange} />
                  <label className='label-inline'>{field}</label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <style jsx>{`
          .cat {
            margin: 1em 0;
          }

          .fields {
            display: flex;
            flex-flow: wrap;
          }

          .field {
            display: flex;
            margin: 0 1em;
          }

          .default > input:checked {
            background-color: ${theme.colors.lightGrey}
            border-color: ${theme.colors.grey}
          }

          .selected {
            background: ${theme.primary}
            color: ${theme.colors.white}
          }
          `}</style>
      </TryContainer>
    )
  }
}

TryAdvanced.propTypes = {
  selectField: PropTypes.func.isRequired,
  selectedFields: PropTypes.array,
  error: PropTypes.object
}

TryAdvanced.defaultProps = {
  selectedFields: [],
  error: null
}

export default TryAdvanced
