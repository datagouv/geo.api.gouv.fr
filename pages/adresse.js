import FaICursor from 'react-icons/lib/fa/i-cursor'
import FaCompass from 'react-icons/lib/fa/compass'

import Page from '../layouts/main'

import Summary from '../components/summary'
import Head from '../components/head'
import TechnicalDoc from '../components/technical-doc'

import doc from '../components/adresse/doc'

import ByAddressName from '../components/adresse/examples/by-address-name'
import CurlDoc from '../components/adresse/curl-doc'

const title = 'Adresse'
const description = 'Cherchez des adresses et lieux-dits.'

const examples = [
  {title: 'Recherche par texte', id: 'text', icon: <FaICursor />}
]

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaCompass />}>
      {description}
    </Head>

    <CurlDoc />

    <TechnicalDoc {...doc} />

    <ByAddressName {...examples[0]} />

  </Page>
)
