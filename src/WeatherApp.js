import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { HeaderSection, CurrentWeather, ForecastSection } from './Container'
import getWeather from './api/getWeather'
import { useQuery } from '@tanstack/react-query';

const WeatherApp = () => {

	const { data } = useQuery({
		queryKey: ['weather'],
		queryFn: getWeather,
	})

	return (
		<View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
			<HeaderSection />
			<CurrentWeather
				src={data?.current?.weather[0]?.icon}
				temp={Math.round(data?.current?.temp)}
				description={data?.current?.weather[0]?.description}
			/>
			<ForecastSection />
		</View>
	)
}

export default WeatherApp