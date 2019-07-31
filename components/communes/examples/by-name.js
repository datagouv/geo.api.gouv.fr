import {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import {useInput} from '../../hooks/input'

import Section from '../../section'
import TryName from '../../try-name'
import Tuto from '../../tuto'

function renderCommune(item, isHighlighted) {
  const description = `${item.departement.nom} - ${item.departement.code}`

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

let currentRequest = null

const ByName = ({title, id, icon}) => {
  const [input, setInput] = useInput('Nantes')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [boost, setBoost] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState(`communes?nom=${input}&fields=departement${boost ? '&boost=population' : ''}`)

  const handleSelect = useCallback(item => {
    setInput(item.nom)
  }, [setInput])

  const handleSearch = useCallback(debounce(async () => {
    try {
      const req = api(query)

      currentRequest = req

      const response = await await api(query)
      if (currentRequest === req) {
        setResults(response.splice(0, 5) || [])
      }
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }, 200), [results, error, query, setLoading])

  const handleBoost = useCallback(() => {
    setBoost(!boost)
  }, [boost, setBoost])

  useEffect(() => {
    setQuery(`communes?nom=${input}&fields=departement${boost ? '&boost=population' : ''}`)
    handleSearch()
  }, [input, boost, handleSearch])

  useEffect(() => {
    handleSearch()
  }, [handleSearch, query])

  return (
    <Section background='white'>
      <div id={id}>
        <Tuto
          title={title}
          description='La variable nom vous permet d’effectuer une recherche de communes par nom.'
          icon={icon}
          exemple={`https://geo.api.gouv.fr/${query}`}
          results={results}
          tips='Il est possible d’utiliser la recherche par nom pour faire de l’autocomplétion.'
          side='right'
          loading={loading}
        >
          <div>
            <p>L’option <span className='field'>boost=population</span> vous permet de prioriser les résultats avec une plus grande population.</p>
            <p>Cette option prend tout son sens lorsque l’on recherche des communes comme <b>Nantes</b> par exemple.</p>
          </div>
        </Tuto>

        <TryName
          value={input}
          placeholder='Rechercher une commune…'
          results={results}
          boost={boost}
          loading={loading}
          error={error}
          disabledBoost={false}
          renderItem={renderCommune}
          handleChange={setInput}
          handleSelect={handleSelect}
          handleBoost={handleBoost}
        />
      </div>

      <style jsx>{`
          .field {
            background: ${theme.primary};
            color: ${theme.colors.white};
            border-radius: 2px;
            padding: 0.1em 0.3em;
          }
          `}</style>
    </Section>
  )
}

ByName.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByName
