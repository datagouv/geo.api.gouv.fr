import PropTypes from 'prop-types'
import Notification from '../notification'

const Presentation = ({title, description, icon, tips, warning, children}) => (
  <div className='presentation'>
    <h3>{icon} {title}</h3>
    <p>{description}</p>
    {children}
    {tips && <Notification message={tips} type='info' />}
    {warning && <Notification message={warning} type='warning' />}
  </div>
)

Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  tips: PropTypes.string,
  warning: PropTypes.string,
  children: PropTypes.node
}

Presentation.defaultProps = {
  tips: '',
  warning: '',
  children: null
}

export default Presentation
