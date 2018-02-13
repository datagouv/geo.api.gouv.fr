import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../styles/theme'

import ParamsTable from './params-table'

class Arguments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {expanded: false}

    this.expand = this.expand.bind(this)
  }

  expand() {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render() {
    const {expanded} = this.state
    const {defaults, optionals} = this.props

    return (
      <div>

        <div className='container' onClick={this.expand}>
          <b>Arguments</b>
          <img className={`${expanded ? 'reverse' : ''}`} src='../../static/images/icons/arrow-down.svg' />
        </div>

        {expanded &&
          <div>
            <ParamsTable params={defaults} />
            {optionals && <ParamsTable params={optionals} />}
          </div>
        }

        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            display: flex;
            align-items: center;
            padding: 0.5em 2em 0.5em 0.5em ;
            background: ${theme.colors.white};
            border-radius: 3px;
            color: ${theme.darkText};
            margin: 0.5em 0;
          }

          .container:hover {
            cursor: pointer;
          }

          .container img {
            width: 20px;
          }

          img.reverse {
            -webkit-transform: scaleY(-1);
            transform: scaleY(-1);
          }
          `}</style>
      </div>
    )
  }
}

Arguments.propTypes = {
  defaults: PropTypes.array.isRequired,
  optionals: PropTypes.array
}

Arguments.defaultProps = {
  optionals: null
}

export default Arguments
