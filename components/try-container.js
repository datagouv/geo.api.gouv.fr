import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Notification from './notification'

const TryContainer = ({error, children}) => (
  <div className='container'>
    <h3>Essayez-moi</h3>
    {children}
    {error &&
      <div className='error'>
        <Notification message={error.message} type='error' />
      </div>
    }
    <style jsx>{`
      .container {
        padding: 2em;
        background: white;
        border-radius: 4px;
        box-shadow: 2px 4px 30px -3px ${theme.boxShadow};
      }

      .error {
        margin: 1em 0;
      }

      h3 {
        text-align: center;
      }
      `}</style>
  </div>
)

TryContainer.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node.isRequired
}

TryContainer.defaultProps = {
  error: null
}

export default TryContainer
