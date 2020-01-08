import {Mail, Tag, List, Compass, Sliders} from 'react-feather'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByCode from './examples/by-code'
import ByCommuneName from './examples/by-commune-name'
import CommunesList from './examples/communes-list'
import ByLatLon from './examples/by-lat-lon'
import AdvancedSearch from './examples/advanced-search'

import doc from './doc'

const examples = [
  {title: 'Recherche par code postal', id: 'postal-code', icon: <Mail />},
  {title: 'Recherche par nom', id: 'name', icon: <Tag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <List />},
  {title: 'Recherche géographique', id: 'geo', icon: <Compass />},
  {title: 'Recherche avancée', id: 'advanced', icon: <Sliders />}
]

const Communes = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByCode {...examples[0]} />
    <ByCommuneName {...examples[1]} />
    <CommunesList {...examples[2]} />
    <ByLatLon {...examples[3]} />
    <AdvancedSearch {...examples[4]} />
  </div>
)

export default Communes
