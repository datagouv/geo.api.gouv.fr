import PropTypes from 'prop-types'

import InputForm from '../../input-form'
import TryContainer from '../../try-container'

function TryPostalCode({input, onChange, onSubmit, error, loading}) {
  return (
    <TryContainer error={error}>
      <InputForm
        value={input}
        placeholder='Code postal'
        buttonText='Chercher'
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading} />
    </TryContainer>
  )
}

TryPostalCode.propTypes = {
  input: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool
}

TryPostalCode.defaultProps = {
  input: '',
  error: null,
  loading: false
}

export default TryPostalCode
