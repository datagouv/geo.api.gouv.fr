import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'

import Page from '../layouts/main'

import Summary from '../components/summary'
import Head from '../components/head'
import TechnicalDoc from '../components/technical-doc'

import doc from '../components/adresse/doc'

const title = 'Adresse'
const description = 'Cherchez des adresses et lieux-dits.'

const examples = [
  {title: 'Recherche par texte', id: 'text', icon: <FaTag />},
  {title: 'Rechercher par coordonnée', id: 'coords', icon: <FaCompass />}
]

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaCompass />}>
      {description}
    </Head>

    <Summary examples={examples} />

    <TechnicalDoc {...doc} />
  </Page>
)
