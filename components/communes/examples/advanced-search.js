import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import {getCommunes} from '../../../lib/api/geo'

import {useFetch} from '../../hooks/fetch'
import {useQuery} from '../../hooks/query'

import Section from '../../section'
import Tuto from '../../tuto'
import TryAdvanced from '../demo/try-advanced'

const AdvancedSearch = ({title, id, icon}) => {
  const [fields, setFields] = useState([])
  const [url, options] = useQuery(fields, fields => getCommunes({params: {nom: 'Versailles'}, fields: ['code', 'nom', ...fields]}))
  const [response, loading, error] = useFetch(url, options, false)

  const handleSelect = useCallback(field => {
    const nfields = [...fields]
    if (nfields.includes(field)) {
      const index = nfields.indexOf(field)
      nfields.splice(index, 1)
    } else {
      nfields.push(field)
    }

    setFields(nfields)
  }, [fields])

  return (
    <Section background='grey'>
      <div id={id}>
        <Tuto
          title={title}
          description='Le paramètre fields vous permet de filtrer les informations.'
          icon={icon}
          exemple={url}
          results={response}
          tips='Le paramètre format permet de préciser un format de sortie des données (json/geojson).'
          warning='Le format GeoJSON implique de choisir une géométrie principale. Par défaut il s’agit du centre. Cela peut être changé en ajoutant le paramètre geometry=contour.'
          loading={loading}
          side='right'
        />

        <TryAdvanced selectedFields={fields} selectField={handleSelect} error={error} />
      </div>
    </Section>
  )
}

AdvancedSearch.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default AdvancedSearch
