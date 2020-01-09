import {MapPin} from 'react-feather'

import Head from '../../components/head'
import Page from '../../layouts/main'

import Departements from '../../components/departements'

const title = 'API Découpage administratif > Départements'
const description = 'Tous les départements de France.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapPin />}>
      {description}
    </Head>
    <Departements />
  </Page>
)
