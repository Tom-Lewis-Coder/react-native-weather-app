import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { HeaderSection, CurrentWeather, ForecastSection } from './Container'
import getWeather from './api/getWeather'

const WeatherApp = () => {

	const [data, setData] = useState({})

	useEffect(() => {
		let data = getWeather()
		setData(data)
	}, [])

	console.log(data)

	return (
		<View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
			<HeaderSection />
			<CurrentWeather />
			<ForecastSection />
		</View>
	)
}

export default WeatherApp