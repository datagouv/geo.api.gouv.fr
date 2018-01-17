import FaCompass from 'react-icons/lib/fa/compass'

import Section from '../section'
import TryGeo from '../demo/try-geo'
import Tuto from './tuto'

const json = `{
   "nom":"Versailles",
   "code":"78646",
   "codeDepartement":"78",
   "codeRegion":"11",
   "codesPostaux":[
      "78000"
   ],
   "population":85272
}`

const ByLatLon = () => (
  <Section background='grey'>
    <Tuto
      title='Recherche géographique'
      description='Les variables lon et lat permettent d’effectuer une recherche géographique.'
      icon={<FaCompass />}
      exemple='https://geo.api.gouv.fr/communes?lon=2.1301&lat=48.8014'
      code={json}
      side='left' />
    <TryGeo />
  </Section>
)

export default ByLatLon
