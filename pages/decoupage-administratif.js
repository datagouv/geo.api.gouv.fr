import {Book} from 'react-feather'
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
          <p>Toutes les communes de France, mais aussi les arrondissements.</p>
          <ButtonLink href='/decoupage-administratif/communes' size='large'>Voir la documentation <span className='feather-icon'><Book /></span></ButtonLink>
        </div>
        <div className='col'>
          <h3>EPCI</h3>
          <p>Tous les EPCI de France.</p>
          <ButtonLink href='/decoupage-administratif/epcis' size='large'>Voir la documentation <span className='feather-icon'><Book /></span></ButtonLink>
        </div>
        <div className='col'>
          <h3>Départements</h3>
          <p>Tous les départements de France.</p>
          <ButtonLink href='/decoupage-administratif/departements' size='large'>Voir la documentation <span className='feather-icon'><Book /></span></ButtonLink>
        </div>
        <div className='col'>
          <h3>Régions</h3>
          <p>Toutes les régions de France.</p>
          <ButtonLink href='/decoupage-administratif/regions' size='large'>Voir la documentation <span className='feather-icon'><Book /></span></ButtonLink>
        </div>
      </div>
    </Section>

    <style jsx>{`
      .col {
        display: flex;
        flex-direction: column;
        align-items: self-start;
      }

      .feather-icon {
        font-size: 22px;
        vertical-align: middle;
        margin-left: 0.31em;
      }
      `}</style>
  </Page>
)
