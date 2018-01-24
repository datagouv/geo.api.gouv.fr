import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Loader = ({size, text, ...props}) => (
  <div {...props} className='container'>
    {text && <div className='text'>{text}</div>}
    <div className={`loader ${size}`} />
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin: 1em;
        height: 100%;
      }

      .loader {
        margin: auto;
        animation: spin 2s linear infinite;
        border-radius: 50%;
      }

      .text {
        margin-bottom: 1em;
      }

      .tiny {
        border: 4px solid ${theme.primary};
        border-top: 4px solid ${theme.colors.white};
        width: 25px;
        height: 25px;
      }

      .medium {
        border: 6px solid ${theme.primary};
        border-top: 6px solid ${theme.colors.white};
        width: 50px;
        height: 50px;
      }

      .big {
        border: 10px solid ${theme.primary};
        border-top: 10px solid ${theme.colors.white};
        width: 100px;
        height: 100px;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string
}

Loader.defaultProps = {
  size: 'medium',
  text: null
}

export default Loader
