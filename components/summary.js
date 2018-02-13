import PropTypes from 'prop-types'
import Link from 'next/link'

import theme from '../styles/theme'

import Section from './section'

const Summary = ({examples}) => (
  <Section title='Découvrez l’API' background='white'>
    <div className='main'>
      {examples.map(feature => (
        <Link key={feature.title} href={`#${feature.id}`}>
          <a>
            <div className='icon'>{feature.icon}</div>
            <p>{feature.title}</p>
          </a>
        </Link>
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
        color: ${theme.darkText};
        font-size: 1.2em;
        font-style: italic;
      }

      .main a {
        color: ${theme.darkText};
      }

      .main a:hover {
        cursor: pointer;
        font-weight: 600;
      }

      .icon {
        font-size: 72px;
      }

      @media (min-width: 768px) {
        .main {
          grid-template-columns: repeat(${examples.length}, 1fr);
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
  examples: PropTypes.array.isRequired
}

export default Summary
