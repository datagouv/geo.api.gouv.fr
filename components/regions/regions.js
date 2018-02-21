import FaTag from 'react-icons/lib/fa/tag'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc/technical-doc'

import ByName from './examples/by-name'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />}
]

const Regions = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByName />
  </div>
)

export default Regions
