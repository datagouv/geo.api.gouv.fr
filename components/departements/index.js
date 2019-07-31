import FaList from 'react-icons/lib/fa/list'
import FaTag from 'react-icons/lib/fa/tag'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByName from './examples/by-name'
import DepartementsList from './examples/departements-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste de départements', id: 'departements-list', icon: <FaList />}
]

const Departements = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByName />
    <DepartementsList />
  </div>
)

export default Departements
