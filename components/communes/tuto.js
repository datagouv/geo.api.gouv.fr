import PropTypes from 'prop-types'
import React from 'react'
import copy from 'copy-to-clipboard'

import theme from '../../styles/theme'

import InputExemple from '../input-exemple'
import Notification from '../notification'

class Tuto extends React.Component {
  constructor(props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  copyToClipboard(value) {
    copy(value)
  }

  render() {
    const {title, description, icon, exemple, code, tips, warning, side, children} = this.props

    return (
      <div className='container'>

        <div className='presentation'>
          <h3>{icon} {title}</h3>
          <p>{description}</p>
          {children}
          {tips && <Notification message={tips} type='info' />}
          {warning && <Notification message={warning} type='warning' />}
        </div>

        <div className='result'>
          <InputExemple value={exemple} copy={this.copyToClipboard} />
          <div>
            <pre><code>{code}</code></pre>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-around;
            flex-direction: ${side === 'right' ? 'row-reverse' : 'row'};
          }

          .result {
            width: 50%;
          }

          .presentation {
            width: 40%;
            margin-right: 1em;
          }

          pre {
            background: ${theme.colors.white};
            border: 1px solid ${theme.backgroundGrey}
            border-radius: 5px;
            width: 100%;
            padding: 1em;
          }

          code {
            width: 100%;
            max-height: 400px;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .container div {
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

Tuto.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  exemple: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  side: PropTypes.PropTypes.oneOf([
    'right', 'left'
  ]).isRequired,
  tips: PropTypes.string,
  warning: PropTypes.string,
  children: PropTypes.node
}

Tuto.defaultProps = {
  tips: '',
  warning: '',
  children: null
}

export default Tuto
