import PropTypes from 'prop-types'

import SearchInput from '../search-input'
import SwitchInput from '../switch-input'
import TryContainer from '../try-container'

const TryName = ({value, placeholder, results, boost, renderItem, loading, error, disabledBoost, handleChange, handleSelect, handleBoost}) => (
  <TryContainer error={error}>
    <SearchInput
      value={value}
      items={results}
      loading={loading}
      placeholder={placeholder}
      onSelect={handleSelect}
      onSearch={handleChange}
      renderItem={renderItem}
      getItemValue={item => item.nom}
    />
    {!disabledBoost && (
      <SwitchInput handleChange={handleBoost} label='Boost de population' isChecked={boost} />
    )}
  </TryContainer>
)

TryName.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  results: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  boost: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  disabledBoost: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  handleBoost: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
}

TryName.defaultProps = {
  value: '',
  placeholder: 'Rechercher…',
  results: null,
  error: null,
  boost: false,
  disabledBoost: true,
  handleBoost: null,
  loading: false
}

export default TryName
