import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import Section from '../../section'

import ByName from '../../demo/by-name'
import {getCommunesAssocieesDeleguees} from '../../../lib/api/geo'

function ByCommuneAssocieeDelegueeName({title, id, icon}) {
  const renderCommune = (item, isHighlighted) => {
    const description = item.departement ? `${item.departement.nom} - ${item.departement.code}` : 'Collectivité d’outre-mer'

    return (
      <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
        <div>{item.nom}</div>
        <div>{description}</div>

        <style jsx>{`
          .item {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            border-bottom: 1px solid whitesmoke;
          }

          .item:hover {
            cursor: pointer;
          }

          .item-highlighted {
            background-color: ${theme.primary};
            color: ${theme.colors.white};
          }
      `}</style>
      </div>
    )
  }

  const renderQuery = ({input, boost}) => {
    const query = getCommunesAssocieesDeleguees({
      boost,
      params: {nom: input},
      fields: ['departement'],
      limit: 5
    })
    return query
  }

  return (
    <Section background='white'>
      <div id={id}>
        <ByName
          title={title}
          defaultInput='Elan'
          placeholder='Rechercher une commune associée ou déléguée…'
          icon={icon}
          renderQuery={renderQuery}
          renderItem={renderCommune}
        />
      </div>
    </Section>
  )
}

ByCommuneAssocieeDelegueeName.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByCommuneAssocieeDelegueeName
