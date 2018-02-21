import Section from '../section'

import ButtonLink from '../button-link'

import theme from '../../styles/theme'

export default () => (
  <Section title='Découvrez l’API' background='white'>
    <div className='main'>
      <ButtonLink href='/docs/communes'>Communes</ButtonLink>
      <ButtonLink href='/docs/departements'>Départements</ButtonLink>
      <ButtonLink href='/docs/regions'>Régions</ButtonLink>
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

      img {
        width: 230px;
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        .main {
          grid-template-columns: repeat(3, 1fr);
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
