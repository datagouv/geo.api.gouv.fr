import {Tag, List, Sliders} from 'react-feather'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByEpciName from './examples/by-epci-name'
import CommunesList from './examples/communes-list'
import AdvancedSearch from './examples/advanced-search'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <Tag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <List />},
  {title: 'Recherche avancée', id: 'advanced', icon: <Sliders />}
]

function Epcis() {
  return (
    <div>
      <Summary examples={examples} />

      <TechnicalDoc {...doc} />

      <ByEpciName {...examples[0]} />
      <CommunesList {...examples[1]} />
      <AdvancedSearch {...examples[2]} />
    </div>
  )
}

export default Epcis
