import {useEffect} from 'react'
import PropTypes from 'prop-types'

import useSources from './hooks/sources'
import useLayers from './hooks/layers'

function ContourMap({contour, coords, setSources, setLayers, setMarkerCoordinates}) {
  const sources = useSources(contour)
  const layers = useLayers(contour)

  useEffect(() => {
    setSources(sources)
    setLayers(layers)
  }, [sources, layers, setSources, setLayers])

  useEffect(() => {
    if (coords) {
      const {latitude, longitude} = coords
      setMarkerCoordinates({lat: latitude, lng: longitude})
    } else {
      setMarkerCoordinates(null)
    }
  }, [coords, setMarkerCoordinates])

  return null
}

ContourMap.defaultProps = {
  contour: null,
  coords: null
}

ContourMap.propTypes = {
  contour: PropTypes.shape({
    features: PropTypes.array.isRequired
  }),
  coords: PropTypes.object,
  setSources: PropTypes.func.isRequired,
  setLayers: PropTypes.func.isRequired
}

export default ContourMap
