import Page from '../layouts/main'

import Hero from '../components/hero'
import Summary from '../components/home/summary'
import Subscribe from '../components/home/subscribe'
import Examples from '../components/examples'

const title = 'Documentation geo.api.gouv.fr'
const tagline = 'Interrogez les référentiels géographiques plus facilement.'

export default () => (
  <Page title={title} description={tagline}>
    <Hero title={title} tagline={tagline} />
    <Summary />
    <Examples />
    <Subscribe />
  </Page>
)
