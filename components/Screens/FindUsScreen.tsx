import { iCountry } from '@/types/types'
import { mapStyle } from '@/utils/utils'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { Translations } from 'i18n/types'
import { useRouter } from 'next/router'
// @ts-ignore
import nun from 'public/images/nun.png'
import React, { useCallback, useRef } from 'react'
//i18n
// import useTranslation from '../../hooks/useTranslations'
import Header from '../header'

const containerStyle = {
  width: '100%',
  height: '100%'
}
const center = {
  lat: 10,
  lng: 0
}
const FindUsScreen = ({ countries }: { countries: iCountry[] }) => {
  //props

  const router = useRouter()
  //ref
  const mapRef = useRef<GoogleMap>()
  //Hooks
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAMd6xUPKHO2A0DC2Q6EVjZVwTxAEXEzYI'
  })
  //State

  const onMapLoad = useCallback(map => {
    mapRef.current = map
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
  }, [])

  return (
    <>
      <Header>
        <>
          <div className="main__section">
            <div className="map__container">
              {isLoaded ? (
                <GoogleMap
                  options={{
                    fullscreenControl: false,
                    clickableIcons: false,
                    streetViewControl: false,
                    minZoom: 3,
                    mapTypeControl: false,
                    // @ts-ignore
                    styles: mapStyle
                  }}
                  center={center}
                  mapContainerStyle={containerStyle}
                  zoom={3}
                  onLoad={onMapLoad}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  {countries.map(country => (
                    <Marker
                      onClick={() => router.push({ pathname: `/[lang]/find_us/[id]`, query: { lang: router.query.lang, id: country._id } })}
                      options={{
                        anchorPoint: new google.maps.Point(1, 0.5),
                        title: (country?.translations as Translations[])[0][router.query.lang as string] as string
                      }}
                      icon={{ url: nun, anchor: new google.maps.Point(5, 28), scaledSize: new google.maps.Size(40, 40) }}
                      key={country._id}
                      position={{ lat: (country.latlng as number[])[0], lng: (country.latlng as number[])[1] }}
                    />
                  ))}
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default FindUsScreen
