import {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

interface MapProps {
  center: google.maps.LatLngLiteral
  zoom: number
  children?: ReactNode
}

export function Map({ center, zoom, children }: MapProps) {
  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        }),
      )
    }
  }, [ref, map, center, zoom])

  return (
    <>
      <div ref={ref} id="map" className="min-h-screen" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-expect-error google is not a valid prop
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}
