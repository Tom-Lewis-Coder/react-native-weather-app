import React from 'react'
import { View, Text } from 'react-native'

const CurrentWeather = () => {
	return (
		<View style={{ 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': 250, 'marginTop': 20, 'marginBottom': 20 }}>
			<Text>
				Icon
			</Text>
			<Text style={{ 'fontSize': 60 }}>
				28
			</Text>
			<Text style={{ 'fontSize': 20, 'color': '#919191' }}>
				Cloudy
			</Text>
		</View>
	)
}

export default CurrentWeather