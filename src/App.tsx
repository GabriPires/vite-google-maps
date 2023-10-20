import { Wrapper } from '@googlemaps/react-wrapper'
import { useEffect, useState } from 'react'
import { Map } from './components/Map'
import { Marker } from './components/Marker'

export function App() {
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/sites')
      .then((response) => response.json())
      .then((data) => {
        setMarkers(data)
      })
  }, [])

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={['marker']}
    >
      <Map center={{ lat: -22.8266262, lng: -45.1959699 }} zoom={12}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            onClick={() => console.log(marker)}
          />
        ))}
      </Map>
    </Wrapper>
  )
}
