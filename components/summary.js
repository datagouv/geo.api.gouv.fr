import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Section from './section'

const Summary = ({features}) => (
  <Section title='Découvrez l’API' background='white'>
    <div className='main'>
      {features.map(feature => (
        <div key={feature.title}>
          <div className='icon'>{feature.icon}</div>
          <p>{feature.title}</p>
        </div>
      ))}
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 0.6em;
      }

      .main div {
        text-align: center;
      }

      .main p {
        text-align: center;
        color: ${theme.themeDarkText};
        font-size: 1.2em;
        font-style: italic;
      }

      .icon {
        font-size: 72px;
      }

      @media (min-width: 768px) {
        .main {
          grid-template-columns: repeat(${features.length}, 1fr);
        }

        .main p {
          padding: 0 2em;
        }

        .main p:not(:last-child) {
          border-right: 1px solid ${theme.themeBorderLighter};
        }
      }
    `}</style>
  </Section>
)

Summary.propTypes = {
  features: PropTypes.array.isRequired
}

export default Summary
