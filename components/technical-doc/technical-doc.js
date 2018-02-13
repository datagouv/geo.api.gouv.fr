import React from 'react'
import PropTypes from 'prop-types'
import FaBook from 'react-icons/lib/fa/book'

import theme from '../../styles/theme'

import Code from '../code'
import Section from '../section'

import Arguments from './arguments'
import Path from './path'

class TechnicalDoc extends React.Component {
  render() {
    const {paths, defaultModel, defaultArgs, optionArgs} = this.props

    return (
      <Section background='primary'>

        <div className='title'>
          <FaBook size={24} />
          <h2>Documentation technique</h2>
        </div>

        <div>
          {paths.map(path => <Path key={path.name} {...path} />)}
        </div>

        <div className='container'>
          <div>
            <h3>Modèle de réponse (par défaut)</h3>
            <Code code={JSON.stringify(defaultModel, null, 2)} />
          </div>
        </div>

        <div className='container'>
          <Arguments defaults={defaultArgs} optionals={optionArgs} />
        </div>

        <style jsx>{`
          .title {
            display: flex;
            align-items: center;
          }

          .title > svg {
            margin-right: 1em;
          }

          .container {
            padding: 0.5em;
            background: ${theme.colors.white};
            border-radius: 3px;
            color: ${theme.darkText};
            margin: 0.5em 0;
          }
          `}</style>
      </Section>
    )
  }
}

TechnicalDoc.propTypes = {
  paths: PropTypes.array.isRequired,
  defaultModel: PropTypes.array.isRequired,
  defaultArgs: PropTypes.array.isRequired,
  optionArgs: PropTypes.array
}

TechnicalDoc.defaultProps = {
  optionArgs: []
}

export default TechnicalDoc
