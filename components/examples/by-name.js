import FaTag from 'react-icons/lib/fa/tag'

import Section from '../section'
import TryName from '../demo/try-name'
import Tuto from './tuto'

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

const ByName = () => (
  <Section background={'white'}>
    <Tuto
      title='Recherche par nom'
      description='La variable nom vous permet d’effectuer une recherche de communes par nom.'
      icon={<FaTag />}
      exemple='https://geo.api.gouv.fr/communes?nom=versailles'
      code={json}
      tips='Il est possible d’utiliser la recherche par nom pour faire de l’autocomplétion.'
      side='right' />
    <TryName />
  </Section>
)

export default ByName
