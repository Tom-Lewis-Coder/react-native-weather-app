import { View, Text, Image } from 'react-native'

const getIcon = iconCode => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}

const CurrentWeather = ({ src, temp, description }) => {
  return (
    <View style={{ 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': 250, 'marginTop': 20, 'marginBottom': 20 }}>
      <Image style={{ 'minWidth': 100, 'minHeight': 75 }} alt="src" src={getIcon(src)} />
      <Text style={{ 'fontSize': 60 }}>
        {temp}°
      </Text>
      <Text style={{ 'fontSize': 20, 'color': '#919191' }}>
        {description?.split(' ').map(string => string.toString().slice(0, 1).toUpperCase() + string.toString().slice(1)).join(' ')}
      </Text>
    </View>
  )
}

export default CurrentWeather