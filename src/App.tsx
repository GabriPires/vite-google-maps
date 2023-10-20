import { Wrapper } from '@googlemaps/react-wrapper'
import { Map } from './components/Map'
import { Marker } from './components/Marker'

export function App() {
  const markers: google.maps.LatLngLiteral[] = [
    { lat: -22.8266262, lng: -45.1959699 },
    { lat: -22.8221169, lng: -45.1888888 },
    { lat: -22.8048696, lng: -45.1784175 },
  ]

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
