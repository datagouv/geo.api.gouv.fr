import FaBook from 'react-icons/lib/fa/book'
import Page from '../layouts/main'

import Section from '../components/section'
import ButtonLink from '../components/button-link'

const title = 'Découpage administratif'
const description = 'Découvrez comment récupérer facilement les informations dont vous avez besoin pour chaque découpage administratif.'

export default () => (
  <Page title={title} description={description}>
    <Section title={title} subtitle={description} background='color' />
    <Section>
      <div className='grid'>
        <div>
          <h3>Communale</h3>
          <p>Découvrez comment récupérer facilement les informations dont vous avez besoin au niveau communal.</p>
          <ButtonLink href='/decoupage-administratif/communes' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
        <div>
          <h3>Départemental</h3>
          <p>Découvrez comment récupérer facilement les informations dont vous avez besoin au niveau départemental.</p>
          <ButtonLink href='/decoupage-administratif/departements' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
        <div>
          <h3>Régionnal</h3>
          <p>Découvrez comment récupérer facilement les informations dont vous avez besoin au niveau régionnal.</p>
          <ButtonLink href='/decoupage-administratif/regions' size='large'>Voir la documentation <FaBook /></ButtonLink>
        </div>
      </div>
    </Section>
  </Page>
)
