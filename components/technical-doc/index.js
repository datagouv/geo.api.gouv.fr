import PropTypes from 'prop-types'
import FaBook from 'react-icons/lib/fa/book'

import Section from '../section'

import Attributs from './attributs'
import Path from './path'

const TechnicalDoc = ({paths, defaultModel, defaultAttributs, optionAttributs}) => (
  <Section background='color'>

    <div className='title'>
      <FaBook size={24} />
      <h2>Documentation technique</h2>
    </div>

    <div>
      {paths.map(path => (
        <Path key={path.name} {...path} />
      ))}
      <Attributs
        model={defaultModel}
        defaults={defaultAttributs}
        optionals={optionAttributs}
      />
    </div>

    <style jsx>{`
      .title {
        display: flex;
        align-items: center;
      }

      .title > svg {
        margin-right: 1em;
      }
      `}</style>
  </Section>
)

TechnicalDoc.propTypes = {
  paths: PropTypes.array.isRequired,
  defaultModel: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  defaultAttributs: PropTypes.array.isRequired,
  optionAttributs: PropTypes.array
}

TechnicalDoc.defaultProps = {
  optionAttributs: []
}

export default TechnicalDoc
