import FaList from 'react-icons/lib/fa/list'
import FaTag from 'react-icons/lib/fa/tag'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc/technical-doc'

import ByName from './examples/by-name'
import CommunesList from './examples/communes-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <FaList />}
]

const Departements = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByName />
    <CommunesList />

  </div>
)

export default Departements
