import FaList from 'react-icons/lib/fa/list'
import FaTag from 'react-icons/lib/fa/tag'

import Section from '../section'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByName from '../demo/by-name'

import DepartementsList from './departements-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste de départements', id: 'departements-list', icon: <FaList />}
]

const Departements = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <Section background='grey'>
      <ByName
        defaultInput='Yvelines'
        placeholder='Rechercher un département…'
        renderQuery={({input}) => 'departements?nom=' + input}
      />
    </Section>
    <DepartementsList />
  </div>
)

export default Departements
