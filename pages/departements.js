import FaMapSigns from 'react-icons/lib/fa/map-signs'

import Head from '../components/head'
import Page from '../layouts/main'

import Departements from '../components/departements/departements'

const title = 'Departements'
const description = 'Interrogez les référentiels géographiques plus facilement.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaMapSigns />}>
      En savoir plus sur <strong>adresse.data.gouv.fr</strong>.
    </Head>
    <Departements />
  </Page>
)
