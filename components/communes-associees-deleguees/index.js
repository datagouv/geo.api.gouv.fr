import {Tag, List, Sliders} from 'react-feather'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByCommuneAssocieeDelegueeName from './examples/by-commune-associee-deleguee-name'
import CommunesAssocieesDelegueesList from './examples/communes-associees-deleguees-list'
import AdvancedSearch from './examples/advanced-search'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <Tag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <List />},
  {title: 'Recherche avancée', id: 'advanced', icon: <Sliders />}
]

function CommunesAssocieesDeleguees() {
  return (
    <div>
      <Summary examples={examples} />

      <TechnicalDoc {...doc} />

      <ByCommuneAssocieeDelegueeName {...examples[1]} />
      <CommunesAssocieesDelegueesList {...examples[2]} />
      <AdvancedSearch {...examples[3]} />
    </div>
  )
}

export default CommunesAssocieesDeleguees
