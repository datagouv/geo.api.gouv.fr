import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import SearchInput from '../../search-input'
import TryContainer from '../../try-container'

function renderDepartement(item, isHighlighted) {
  return (
    <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>
        <div className='label'>{item.nom}</div>
      </div>
      <div>{item.code}</div>
      <style jsx>{`
        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          border-bottom: 1px solid whitesmoke;
        }

        .item .label {
          font-weight: 600;
        }

        .item:hover {
          cursor: pointer;
        }

        .item-highlighted {
          background-color: ${theme.primary};
          color: ${theme.colors.white};
        }
      `}</style>
    </div>
  )
}

const TryName = ({value, results, loading, error, handleChange, handleSelect}) => (
  <TryContainer error={error}>
    <SearchInput
      value={value}
      results={results}
      loading={loading}
      placeholder='Rechercher un département…'
      handleSelect={handleSelect}
      search={handleChange}
      renderItem={renderDepartement} />
  </TryContainer>
)

TryName.propTypes = {
  value: PropTypes.string,
  results: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
}

TryName.defaultProps = {
  value: '',
  results: null,
  error: null,
  loading: false
}

export default TryName
