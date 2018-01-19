import FaList from 'react-icons/lib/fa/list'
import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'
import FaSlider from 'react-icons/lib/fa/sliders'

import Summary from '../summary'

const features = [
  {title: 'Recherche par nom', icon: <FaTag />},
  {title: 'Liste de communes', icon: <FaList />},
  {title: 'Recherche géographique', icon: <FaCompass />},
  {title: 'Recherche avancée', icon: <FaSlider />}
]

const Regions = () => (
  <div>
    <Summary features={features} />
  </div>
)

export default Regions
