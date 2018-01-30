import FaList from 'react-icons/lib/fa/list'
import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'
import FaSlider from 'react-icons/lib/fa/sliders'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc/technical-doc'

import ByName from './examples/by-name'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <FaList />},
  {title: 'Recherche géographique', id: 'geo', icon: <FaCompass />},
  {title: 'Recherche avancée', id: 'advanced', icon: <FaSlider />}
]

const Departements = () => (
  <div>
    <Summary examples={examples} />
    <TechnicalDoc {...doc} />

    <ByName />
  </div>
)

export default Departements
