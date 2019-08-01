import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import api from '../../../lib/api'
import theme from '../../../styles/theme'

import Section from '../../section'
import Tuto from '../../tuto'

import TryGeo from '../demo/try-geo'

const ByLatLon = ({title, id, icon}) => {
  const [position, setPosition] = useState(null)
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLocation = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(setPosition, error => setError(error))
  }

  useEffect(() => {
    if (position) {
      const latLon = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude
      const fields = 'communes?fields=code,nom,codesPostaux,surface,population,centre,contour&'
      setQuery(fields + latLon)
    }
  }, [position])

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await api(query)
        setResults(response)
      } catch (error) {
        setResults([])
        setError(error)
      }

      setLoading(false)
    }

    if (query) {
      handleSearch()
    }
  }, [query])

  return (
    <Section>
      <div id={id}>
        <Tuto
          title={title}
          description='Il est possible de faire une recherche géographique à l’aide de coordonnées.'
          icon={icon}
          exemple={`https://geo.api.gouv.fr/${query}`}
          results={results}
          loading={loading}
          side='left'
        >
          <div>
            <p>En utilisant les variables <span className='field'>lat</span> et <span className='field'>lon</span> l’api renverra la commune correspondante.</p>
          </div>
        </Tuto>

        <TryGeo
          coords={position ? position.coords : null}
          commune={results[0]}
          locateUser={handleLocation}
          error={error}
          loading={loading} />
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

ByLatLon.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default ByLatLon
