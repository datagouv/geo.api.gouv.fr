import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import {Tag} from 'react-feather'

import theme from '../../styles/theme'

import {useFetch} from '../hooks/fetch'
import {useInput} from '../hooks/input'
import {useListItem} from '../hooks/list-items'

import Tuto from '../tuto'

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

function ByName({defaultInput, placeholder, disabledBoost, renderQuery, renderList, renderItem, children}) {
  const [input, setInput] = useInput(defaultInput || '')
  const [boost, setBoost] = useState(true)
  const [url, options] = useQuery({input, boost}, renderQuery)
  const [response, loading, error] = useFetch(url, options, true)
  const list = useListItem(response, renderList)

  const handleSelect = useCallback(item => {
    setInput(item.nom)
  }, [setInput])

  const handleBoost = useCallback(() => {
    setBoost(!boost)
  }, [boost, setBoost])

  return (
    <div id='name'>
      <Tuto
        title='Recherche par nom'
        description='La variable nom vous permet d’effectuer une recherche par nom.'
        icon={<Tag />}
        exemple={url}
        results={response || []}
        tips='Il est possible d’utiliser la recherche par nom pour faire de l’autocomplétion.'
        side='right'
        loading={loading}
      >
        {children}
      </Tuto>

      <TryName
        value={input}
        placeholder={placeholder}
        results={list}
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
  renderList: null,
  renderItem: null,
  children: null
}

ByName.propTypes = {
  defaultInput: PropTypes.string,
  placeholder: PropTypes.string,
  disabledBoost: PropTypes.bool,
  renderQuery: PropTypes.func.isRequired,
  renderList: PropTypes.func,
  renderItem: PropTypes.func,
  children: PropTypes.node
}

export default ByName
