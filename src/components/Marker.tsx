import { FC, useEffect, useState } from 'react'

interface MarkerProps extends google.maps.MarkerOptions {
  onClick: () => void
}

export const Marker: FC<MarkerProps> = ({ onClick, ...options }) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
      marker.addListener('click', onClick)
    }
  }, [marker, onClick, options])

  return null
}
