import Page from '../layouts/main'

import Hero from '../components/hero'
import Subscribe from '../components/home/subscribe'

const title = 'Documentation geo.api.gouv.fr'
const tagline = 'Interrogez les référentiels géographiques plus facilement.'

export default () => (
  <Page title={title} description={tagline}>
    <Hero title={title} tagline={tagline} />
    <Subscribe />
  </Page>
)
