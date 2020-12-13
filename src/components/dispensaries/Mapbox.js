import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'

const Mapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude:  -122.4099,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    <div>
      <ReactMapGL {...viewport } mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>markers here</ReactMapGL>
    </div>
  )
}

export default Mapbox