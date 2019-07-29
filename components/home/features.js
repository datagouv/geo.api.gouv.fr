import Section from '../section'

import ButtonLink from '../button-link'

export default () => (
  <Section title='Découvrez l’API' background='white'>
    <div className='grid'>
      <div className='tile'>
        <ButtonLink href='/docs/communes' size='large'>Communes</ButtonLink>
      </div>
      <div className='tile'>
        <ButtonLink href='/docs/departements' size='large'>Départements</ButtonLink>
      </div>
      <div className='tile'>
        <ButtonLink href='/docs/regions' size='large'>Régions</ButtonLink>
      </div>
    </div>
  </Section>
)
