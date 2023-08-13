import React from 'react'
import { View, Text } from 'react-native'

const ForecastSection = () => {
	return (
		<View style={{ 'height': 350, 'width': '100%', 'backgroundColor': '#e8e8e8', 'padding': 20, 'borderRadius': 20 }}>
			<Text style={{ 'fontSize': 20, 'fontWeight': 'bold', 'marginBottom': 15 }}>
				This Week
			</Text>
		</View>
	)
}

export default ForecastSection