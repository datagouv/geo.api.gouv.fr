import PropTypes from 'prop-types'

import SelectInput from '../select-input'
import TryContainer from '../try-container'
import {useFetch} from '../hooks/fetch'

const TryList = ({value, items, description, label, query, error, handleSelect}) => {
  const [response] = useFetch(query, false)

  const renderOption = option => {
    return <option key={`option-${option.code}`}>{option.code} - {option.nom}</option>
  }

  return (
    <TryContainer error={error}>
      <p><b>{items.length}</b> {description}</p>
      <SelectInput
        value={value}
        label={label}
        options={response || []}
        handleSelect={handleSelect}
        renderOption={renderOption} />
    </TryContainer>
  )
}

TryList.propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  error: PropTypes.object,
  handleSelect: PropTypes.func.isRequired
}

TryList.defaultProps = {
  value: '',
  items: [],
  error: null
}

export default TryList
