import {MapPin} from 'react-feather'

import Head from '../../components/head'
import Page from '../../layouts/main'

import Communes from '../../components/communes'

const title = 'API Découpage administratif > Communes'
const description = 'Toutes les communes de France, mais aussi les arrondissements.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapPin />}>
      Toutes les communes de France, mais aussi les arrondissements.
    </Head>
    <Communes />
  </Page>
)
