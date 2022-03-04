import {Tag, List} from 'react-feather'

import {getDepartements} from '../../lib/api/geo'

import Section from '../section'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc'

import ByName from '../demo/by-name'

import DepartementsList from './departements-list'

import doc from './doc'

const examples = [
  {title: 'Recherche par nom', id: 'name', icon: <Tag />},
  {title: 'Liste de départements', id: 'departements-list', icon: <List />}
]

function Departements() {
  return (
    <div>
      <Summary examples={examples} />

      <TechnicalDoc {...doc} />

      <Section background='grey'>
        <ByName
          defaultInput='Yvelines'
          placeholder='Rechercher un département…'
          renderQuery={({input}) => getDepartements({params: {nom: input}, limit: 5})}
        />
      </Section>
      <DepartementsList />
    </div>
  )
}

export default Departements
