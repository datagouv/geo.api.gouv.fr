import FaEnvelope from 'react-icons/lib/fa/envelope'

import Section from '../../section'
import Tuto from '../tuto'

const json = `[
   {
      "nom":"Versailles",
      "code":"78646",
      "codeDepartement":"78",
      "codeRegion":"11",
      "codesPostaux":[
         "78000"
      ],
      "population":85272,
      "_score":1
   }
]`

const ByCode = () => (
  <Section background='grey'>
    <Tuto
      title='Recherche par code postal'
      description='Il est possible de rechercher une commune avec son code postal.'
      icon={<FaEnvelope />}
      exemple='https://geo.api.gouv.fr/communes?codePostal=78000'
      code={json}
      side='left' />
  </Section>
)

export default ByCode
