import PropTypes from 'prop-types'
import React from 'react'
import copy from 'copy-to-clipboard'

import Result from './result'

import Presentation from './presentation'

class Tuto extends React.Component {
  constructor(props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  copyToClipboard(value) {
    copy(value)
  }

  render() {
    const {title, description, icon, exemple, results, tips, warning, side, loading, children} = this.props

    return (
      <div className='tuto-container'>

        <div className='presentation'>
          <Presentation title={title} description={description} icon={icon} tips={tips} warning={warning}>
            {children}
          </Presentation>
        </div>

        <div className='result'>
          <Result exemple={exemple} results={results} side={side} loading={loading} />
        </div>

        <style jsx>{`
          .tuto-container {
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

          @media (max-width: 768px) {
            .tuto-container {
              flex-direction: column;
            }

            .tuto-container div {
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
  side: PropTypes.PropTypes.oneOf([
    'right', 'left'
  ]).isRequired,
  results: PropTypes.array,
  tips: PropTypes.string,
  warning: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node
}

Tuto.defaultProps = {
  tips: '',
  warning: '',
  results: null,
  loading: true,
  children: null
}

export default Tuto
