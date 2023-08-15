import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import getWeather from './api/getWeather'
import * as Location from 'expo-location'
import { HeaderSection, CurrentWeather, ForecastSection } from './Container'

const WeatherApp = () => {

  const [coords, setCoords] = useState([])
  const [location, setLocation] = useState([])
  const [permission, setPermission] = useState(true)

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setCoords([51.5072, -0.1276])
        setPermission(false)
      }
      const loc = await Location.getCurrentPositionAsync()
      setCoords([loc?.coords?.latitude, loc?.coords?.longitude])

      const regionName = await Location.reverseGeocodeAsync({
        longitude: loc?.coords?.longitude,
        latitude: loc?.coords?.latitude
      })
      setLocation(regionName)
    }
    getLocation()
  }, [])

  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', coords],
    queryFn: async () => {
      const data = await getWeather(coords)
      return data
    },
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 15
  })

  return (
    <View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
      {isLoading ? <ActivityIndicator size='large' style={{ 'marginTop': 300 }} /> : null}
      {isError ? <Text style={{ 'marginTop': 300 }}>Couldn't load weather.</Text> : null}
      {(data &&
        <>
          <HeaderSection
            location={location}
            permission={permission}
          />
          <CurrentWeather
            src={data?.current?.weather[0]?.icon}
            temp={Math.round(data?.current?.temp)}
            description={data?.current?.weather[0]?.description}
          />
          <ForecastSection
            data={data}
          />
        </>
      )}
    </View>
  )
}

export default WeatherApp

