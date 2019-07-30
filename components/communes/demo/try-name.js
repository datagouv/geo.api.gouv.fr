import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import SearchInput from '../../search-input'
import SwitchInput from '../../switch-input'
import TryContainer from '../../try-container'

function renderCommune(item, isHighlighted) {
  const description = `${item.departement.nom} - ${item.departement.code}`

  return (
    <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>{item.nom}</div>
      <div>{description}</div>
      <style jsx>{`
        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          border-bottom: 1px solid whitesmoke;
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

const TryName = ({value, results, boost, loading, error, handleChange, handleSelect, handleBoost}) => (
  <TryContainer error={error}>
    <SearchInput
      value={value}
      results={results}
      loading={loading}
      placeholder='Rechercher une commune…'
      onSelect={handleSelect}
      onSearch={handleChange}
      renderItem={renderCommune}
      getItemValue={item => item.nom}
    />
    <SwitchInput handleChange={handleBoost} label='Boost de population' isChecked={boost} />
  </TryContainer>
)

TryName.propTypes = {
  value: PropTypes.string,
  results: PropTypes.array,
  boost: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  handleBoost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
}

TryName.defaultProps = {
  value: '',
  results: null,
  error: null,
  boost: false,
  loading: false
}

export default TryName
