import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../styles/theme'

import ParamsTable from './params-table'

class Path extends React.Component {
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
    const {name, description, params} = this.props

    return (
      <div>

        <div key={name} className='container get' onClick={this.expand}>
          <div className='method'>get</div>
          <div className='description'>
            <div><b>{name}</b></div>
            <div>{description}</div>
          </div>
        </div>

        {expanded && <ParamsTable params={params} />}

        <style jsx>{`
          .container {
            padding: 0.5em 2em 0.5em 0.5em ;
            background: ${theme.colors.white};
            border-radius: 3px;
            color: ${theme.darkText};
            margin: 0.5em 0;
          }

          .get {
            display: flex;
            align-items: center;
          }

          .get:hover {
            cursor: pointer;
          }

          .method {
            background: ${theme.primary};
            color: ${theme.colors.white};
            font-weight: 600;
            border-radius: 3px;
            padding: 0.3em 1em;
            margin-right: 1em;
            text-transform: uppercase;
          }

          .description {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          `}</style>
      </div>
    )
  }
}

Path.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  params: PropTypes.array.isRequired
}

export default Path
