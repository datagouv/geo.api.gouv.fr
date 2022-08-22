import {MapPin} from 'react-feather'

import Head from '../../components/head'
import Page from '../../layouts/main'

import Epcis from '../../components/epcis'

const title = 'API Découpage administratif > EPCI'
const description = 'Tous les EPCI de France.'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<MapPin />}>
      Toutes les EPCI de France.
    </Head>
    <Epcis />
  </Page>
)
