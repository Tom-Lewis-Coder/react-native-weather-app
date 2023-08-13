import React from 'react'
import { View, Text } from 'react-native'
import { HeaderSection, CurrentWeather, ForecastSection } from './Container'

const WeatherApp = () => {
	return (
		<View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
			<HeaderSection />
			<CurrentWeather />
			<ForecastSection />
		</View>
	)
}

export default WeatherApp