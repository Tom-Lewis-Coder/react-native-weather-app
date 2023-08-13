import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { HeaderSection, CurrentWeather, ForecastSection } from './Container'
import getWeather from './api/getWeather'
import { useQuery } from '@tanstack/react-query';

const WeatherApp = () => {

	const { data, isLoading, isError } = useQuery({
		queryKey: ['weather'],
		queryFn: getWeather,
	})

	return (
		<View style={{ 'backgroundColor': '#fff', 'alignItems': 'center', 'padding': 20, 'height': 750, }}>
			{isLoading ? <ActivityIndicator size='large' style={{ 'marginTop': 300 }} /> : null}
			{isError ? <Text style={{ 'marginTop': 300 }}>Couldn't load weather.</Text> : null}
			{(data &&
				<>
					<HeaderSection />
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