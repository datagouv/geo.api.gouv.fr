import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

const TryContainer = ({children}) => (
  <div className='container'>
    <h3>Essayez-moi</h3>
    {children}
    <style jsx>{`
      .container {
        padding: 2em;
        background: white;
        border-radius: 4px;
        box-shadow: 2px 4px 30px -3px ${theme.boxShadow};
      }

      h3 {
        text-align: center;
      }
      `}</style>
  </div>
)

TryContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default TryContainer
