import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'
import FaSlider from 'react-icons/lib/fa/sliders'

import Section from '../section'

import theme from '../../styles/theme'

export default () => (
  <Section title='Découvrez l’API' background='white'>
    <div className='main'>
      <div>
        <FaEnvelope size={72} />
        <p>Recherche par code postal</p>
      </div>
      <div>
        <FaTag size={72} />
        <p>Recherche par nom</p>
      </div>
      <div>
        <FaCompass size={72} />
        <p>Recherche géographique</p>
      </div>
      <div>
        <FaSlider size={72} />
        <p>Recherche avancée</p>
      </div>
    </div>

    <style jsx>{`
      .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 0.6em;
      }

      .main div {
        text-align: center;
        color: ${theme.themeDarkText};
        font-size: 1.2em;
        font-style: italic;
      }

      @media (min-width: 768px) {
        .main {
          grid-template-columns: repeat(4, 1fr);
        }

        .main div {
          padding: 0 2em;
        }

        .main div:not(:last-child) {
          border-right: 1px solid ${theme.themeBorderLighter};
        }
      }
    `}</style>
  </Section>
)
