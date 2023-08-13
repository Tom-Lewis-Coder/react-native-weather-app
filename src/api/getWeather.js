import { REACT_APP_WEATHER } from "@env";

const api = {
	key: REACT_APP_WEATHER,
	base: 'https://api.openweathermap.org/data/3.0/',
}

const getWeather = async () => {
	const response = await fetch(`${api.base}onecall?lat=51.4545&lon=-2.5879&units=metric&exclude=hourly,minutely&appid=${api.key}`)
	const result = await response.json()
	return result
}

export default getWeather