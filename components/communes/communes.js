import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'
import FaSlider from 'react-icons/lib/fa/sliders'

import Summary from '../summary'

import ByCode from './examples/by-code'
import ByName from './examples/by-name'
import ByLatLon from './examples/by-lat-lon'
import AdvancedSearch from './examples/advanced-search'

const examples = [
  {title: 'Recherche par code postal', icon: <FaEnvelope />},
  {title: 'Recherche par nom', icon: <FaTag />},
  {title: 'Recherche géographique', icon: <FaCompass />},
  {title: 'Recherche avancée', icon: <FaSlider />}
]

const Communes = () => (
  <div>
    <Summary examples={examples} />
    <ByCode />
    <ByName />
    <ByLatLon />
    <AdvancedSearch />
  </div>
)

export default Communes
