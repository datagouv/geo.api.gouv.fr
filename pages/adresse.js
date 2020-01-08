import {Compass, Search} from 'react-feather'

import Page from '../layouts/main'

import Head from '../components/head'
import TechnicalDoc from '../components/technical-doc'

import doc from '../components/adresse/doc'

import ByAddressName from '../components/adresse/examples/by-address-name'
import CurlDoc from '../components/adresse/curl-doc'

const title = 'API Adresse'
const description = 'Cherchez des adresses et lieux-dits.'

const examples = [
  {title: 'Recherche par texte', id: 'text', icon: <Search />}
]

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<Compass />}>
      {description}
    </Head>

    <CurlDoc />

    <TechnicalDoc {...doc} />

    <ByAddressName {...examples[0]} />

  </Page>
)
