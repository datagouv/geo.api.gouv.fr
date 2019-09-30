import FaMapSigns from 'react-icons/lib/fa/map-signs'

import Head from '../../components/head'
import Page from '../../layouts/main'

import Departements from '../../components/departements'

const title = 'API Découpage administratif > Départements'
const description = 'Tous les départements de France.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaMapSigns />}>
      {description}
    </Head>
    <Departements />
  </Page>
)
