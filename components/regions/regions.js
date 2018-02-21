import FaTag from 'react-icons/lib/fa/tag'
import FaList from 'react-icons/lib/fa/list'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc/technical-doc'

import ByName from './examples/by-name'
import RegionsList from './examples/regions-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'liste des régions', id: 'regions-list', icon: <FaList />}
]

const Regions = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByName />
    <RegionsList />
  </div>
)

export default Regions
