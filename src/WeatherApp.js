import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import getWeather from './api/getWeather';
import * as Location from 'expo-location';
import { HeaderSection, CurrentWeather, ForecastSection } from './Container';

const WeatherApp = () => {

	const [coords, setCoords] = useState([])
	const [location, setLocation] = useState([])
	const [errorMsg, setErrorMsg] = useState(null)

	useEffect(() => {
		const getLocation = async () => {
			const { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== 'granted') {
				setErrorMsg('Permission to access location denied.')
			}
			const loc = await Location.getCurrentPositionAsync()
			setCoords([loc.coords.latitude, loc.coords.longitude])

			const regionName = await Location.reverseGeocodeAsync({
				longitude: loc.coords.longitude,
				latitude: loc.coords.latitude
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
	})

	console.log(data)

	return (
		<View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
			{isLoading ? <ActivityIndicator size='large' style={{ 'marginTop': 300 }} /> : null}
			{isError ? <Text style={{ 'marginTop': 300 }}>Couldn't load weather.</Text> :
				errorMsg !== null ? <Text style={{ 'marginTop': 300 }}>{errorMsg}</Text> : null}
			{(data && !errorMsg &&
				<>
					<HeaderSection
						location={location}
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

