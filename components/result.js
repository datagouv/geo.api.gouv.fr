import PropTypes from 'prop-types'
import React from 'react'
import copy from 'copy-to-clipboard'

import theme from '../styles/theme'

import Loader from './loader'
import InputExemple from './input-exemple'
import Code from './code'

class Tuto extends React.Component {
  constructor(props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
  }

  copyToClipboard(value) {
    copy(value)
  }

  handleDisplay() {
    this.setState(state => ({
      raw: !state.raw
    }))
  }

  render() {
    const {exemple, results, loading} = this.props

    return (
      <div className='container'>
        <InputExemple value={exemple} copy={this.copyToClipboard} />
        {loading ?
          <div className='loading-pre'>
            <div className='loading-code'>
              <Loader />
            </div>
          </div> :
          <Code code={JSON.stringify(results, null, 2)} />
        }
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }

          .loading-pre {
            background: ${theme.colors.white};
            border: 1px solid ${theme.backgroundGrey}
            border-radius: 5px;
            width: 100%;
            padding: 1em;
            margin: 1em 0;
          }

          .loading-code {
            width: 100%;
            height: 200px;
            background: ${theme.backgroundGrey}
          }
        `}</style>
      </div>
    )
  }
}

Tuto.propTypes = {
  exemple: PropTypes.string.isRequired,
  results: PropTypes.array,
  loading: PropTypes.bool
}

Tuto.defaultProps = {
  loading: true,
  results: null
}

export default Tuto
