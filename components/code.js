import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Code = ({code}) => (
  <>
    <pre><code>{code}</code></pre>
    <style jsx>{`
      pre {
        background: ${theme.colors.white};
        border: 1px solid ${theme.backgroundGrey}
        border-radius: 5px;
        width: 100%;
        padding: 1em;
        margin: 1em 0;
      }

      code {
        width: 100%;
        max-height: 400px;
        background: ${theme.backgroundGrey}
      }
    `}</style>
  </>
)

Code.propTypes = {
  code: PropTypes.string.isRequired
}

export default Code
