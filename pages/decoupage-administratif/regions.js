import {MapPin} from 'react-feather'

import Head from '../../components/head'
import Page from '../../layouts/main'

import Regions from '../../components/regions'

const title = 'API Découpage administratif > Régions'
const description = 'Toutes les régions de France.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapPin />}>
      {description}
    </Head>
    <Regions />
  </Page>
)
