import PropTypes from 'prop-types'
import Link from 'next/link'

import theme from '../styles/theme'

import Section from './section'

const Summary = ({examples}) => (
  <Section title='Découvrez l’API' background='white'>
    <div className='summary'>
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
      .summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        text-align: center;
      }

      .summary p {
        text-align: center;
        color: ${theme.darkText};
        font-size: 1.2em;
        font-style: italic;
      }

      .summary a {
        color: ${theme.darkText};
        text-decoration: none;
      }

      .summary a:hover {
        background: white;
        cursor: pointer;
        font-weight: 700;
      }

      .icon {
        font-size: 72px;
      }
    `}</style>
  </Section>
)

Summary.propTypes = {
  examples: PropTypes.array.isRequired
}

export default Summary
