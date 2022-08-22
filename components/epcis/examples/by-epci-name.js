import PropTypes from 'prop-types'

import theme from '../../../styles/theme'

import Section from '../../section'

import ByName from '../../demo/by-name'
import {getEpcis} from '../../../lib/api/geo'

function ByEpciName({title, id, icon}) {
  const renderCommune = (item, isHighlighted) => {
    return (
      <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
        <div>{item.nom}</div>

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
    const query = getEpcis({
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
          defaultInput='Nan'
          placeholder='Rechercher un EPCI'
          icon={icon}
          disabledBoost={false}
          renderQuery={renderQuery}
          renderItem={renderCommune}
        >
          <div>
            <p>L’option <span className='field'>boost=population</span> vous permet de prioriser les résultats avec une plus grande population.</p>
            <p>Cette option prend tout son sens lorsque l’on recherche des EPCI comme <b>Nantes</b> par exemple.</p>
          </div>
        </ByName>
      </div>
    </Section>
  )
}

ByEpciName.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByEpciName
