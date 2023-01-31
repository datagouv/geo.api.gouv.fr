import {MapPin} from 'react-feather'

import Head from '../../components/head'
import Page from '../../layouts/main'

import CommunesAssocieesDeleguees from '../../components/communes-associees-deleguees'

const title = 'API Découpage administratif > Communes associées ou déléguées'
const description = 'Toutes les communes associées ou déléguées de France'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapPin />}>
      Toutes les communes associées ou déléguées de France.
    </Head>
    <CommunesAssocieesDeleguees />
  </Page>
)
