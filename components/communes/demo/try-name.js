import PropTypes from 'prop-types'

import SearchInput from '../../search-input'
import SwitchInput from '../../switch-input'
import TryContainer from '../../try-container'

const TryName = ({value, results, boost, loading, error, handleChange, handleSelect, handleBoost}) => (
  <TryContainer error={error}>
    <SearchInput
      value={value}
      results={results}
      loading={loading}
      placeholder='Rechercher une commune…'
      handleSelect={handleSelect}
      search={handleChange} />
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
