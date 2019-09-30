import FaBook from 'react-icons/lib/fa/book'
import Page from '../layouts/main'

import Section from '../components/section'
import ButtonLink from '../components/button-link'

const title = 'API Découpage administratif'
const description = 'Rechercher et localiser les communes, départements et régions, et obtenez des informations les concernant'

export default () => (
  <Page title={title} description={description}>
    <Section title={title} subtitle={description} background='color' />
    <Section>
      <div className='grid'>
        <div className='col'>
          <h3>Communes</h3>
          <p>Toutes les communes de France, mais aussi les communes anciennes et les arrondissements.</p>
          <ButtonLink href='/decoupage-administratif/communes' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
        <div className='col'>
          <h3>Départements</h3>
          <p>Tous les départements de France.</p>
          <ButtonLink href='/decoupage-administratif/departements' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
        <div className='col'>
          <h3>Régions</h3>
          <p>Toutes les régions de France.</p>
          <ButtonLink href='/decoupage-administratif/regions' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
      </div>
    </Section>

    <style jsx>{`
      .col {
        display: flex;
        flex-direction: column;
        align-items: self-start;
      }
      `}</style>
  </Page>
)
