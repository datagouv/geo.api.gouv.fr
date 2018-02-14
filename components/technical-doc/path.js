import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../styles/theme'

import ExpandableMenu from '../expandable-menu'
import ParamsTable from './params-table'

class Path extends React.Component {
  render() {
    const {name, description, params} = this.props
    const title = (
      <div className='get'>
        <div className='method'>get</div>
        <div className='description'>
          <div><b>{name}</b></div>
          <div>{description}</div>
        </div>
        <style jsx>{`
          .get {
            display: flex;
            align-items: center;
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
            font-weight: 500;
          }
          `}</style>
      </div>
    )

    return (
      <ExpandableMenu title={title}>
        <ParamsTable params={params} />
      </ExpandableMenu>
    )
  }
}

Path.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  params: PropTypes.array.isRequired
}

export default Path
