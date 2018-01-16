/* eslint react/no-danger: off */
import React from 'react'
import PropTypes from 'prop-types'
import L from 'leaflet'
import {Map, TileLayer, Marker, GeoJSON} from 'react-leaflet'

import mapStyle from 'leaflet/dist/leaflet.css'

const LeafletMap = ({center, position, zoom, data}) => {
  const iconUrl = '../../static/images/map/marker-icon.png'

  return (
    <div>
      <Map center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          url='https://tilecache.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
          attribution='Map data &copy; 2012 OpenStreetMap contributors' />

        {position && <Marker position={position} icon={L.icon({iconUrl})} />}

        {data && <GeoJSON
          color='blue'
          fillOpacity={0.1}
          weight={2}
          data={data} />}
      </Map>

      <style dangerouslySetInnerHTML={{__html: mapStyle}} />

      <style jsx>{`
        div {
          width: 100%;
          max-width: 500px;
          height: 400px;
        }

        div :global(.leaflet-container) {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

LeafletMap.propTypes = {
  data: PropTypes.object,
  center: PropTypes.array,
  position: PropTypes.array,
  zoom: PropTypes.number
}

LeafletMap.defaultProps = {
  data: null,
  position: null,
  center: [46.921982, 2.978952],
  zoom: 5
}

export default LeafletMap
