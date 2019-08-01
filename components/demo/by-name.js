import {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import FaTag from 'react-icons/lib/fa/tag'

import theme from '../../styles/theme'

import Tuto from '../tuto'
import {useSearch} from '../hooks/search'
import {useInput} from '../hooks/input'

import {useQuery} from '../hooks/query'
import TryName from './try-name'

function renderDefaultItem(item, isHighlighted) {
  return (
    <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>{item.nom}</div>
      <div>{item.code}</div>
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

const ByName = ({defaultInput, placeholder, disabledBoost, renderQuery, renderItem, children}) => {
  const [input, setInput] = useInput(defaultInput || '')
  const [results, setResults] = useState([])
  const [boost, setBoost] = useState(true)
  const [query] = useQuery({input, boost}, renderQuery)
  const [response, loading, error] = useSearch(query, true)

  const handleSelect = useCallback(item => {
    setInput(item.nom)
  }, [setInput])

  const handleBoost = useCallback(() => {
    setBoost(!boost)
  }, [boost, setBoost])

  useEffect(() => {
    if (response) {
      setResults(response)
    }
  }, [response, setResults])

  return (
    <div id='name'>
      <Tuto
        title='Recherche par nom'
        description='La variable nom vous permet d’effectuer une recherche par nom.'
        icon={<FaTag />}
        exemple={`https://geo.api.gouv.fr/${query}`}
        results={results}
        tips='Il est possible d’utiliser la recherche par nom pour faire de l’autocomplétion.'
        side='right'
        loading={loading}
      >
        {children}
      </Tuto>

      <TryName
        value={input}
        placeholder={placeholder}
        results={results}
        boost={boost}
        loading={loading}
        error={error}
        disabledBoost={disabledBoost}
        renderItem={renderItem || renderDefaultItem}
        handleChange={setInput}
        handleSelect={handleSelect}
        handleBoost={handleBoost}
      />

      <style jsx>{`
          .field {
            background: ${theme.primary};
            color: ${theme.colors.white};
            border-radius: 2px;
            padding: 0.1em 0.3em;
          }
      `}</style>
    </div>
  )
}

ByName.defaultProps = {
  defaultInput: '',
  placeholder: null,
  disabledBoost: true,
  renderItem: null,
  children: null
}

ByName.propTypes = {
  defaultInput: PropTypes.string,
  placeholder: PropTypes.string,
  disabledBoost: PropTypes.bool,
  renderQuery: PropTypes.func.isRequired,
  renderItem: PropTypes.func,
  children: PropTypes.node
}

export default ByName
