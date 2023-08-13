import { REACT_APP_WEATHER } from "@env";

const api = {
  key: REACT_APP_WEATHER,
  base: 'https://api.openweathermap.org/data/3.0/',
}

const getWeather = async (coordsArray) => {
  if (!coordsArray) return null
  let lat = coordsArray[0]
  let lon = coordsArray[1]
  const response = await fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${api.key}`)
  const result = await response.json()
  return result
}

export default getWeather