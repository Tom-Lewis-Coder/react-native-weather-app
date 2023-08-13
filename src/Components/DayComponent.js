import { Text, View, Image } from 'react-native';

const getDayNum = () => {
	let d = new Date()
	return d.getDay()
}

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const getIcon = iconCode => {
	return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}

const DayComponent = ({ dayNum, temp, low, src, weather }) => {
	return (
		<View style={{ 'flexDirection': 'row', 'alignItems': 'center' }}>
			<Text style={{ 'minWidth': 80, 'fontSize': 13, 'color': '#919191' }}>
				{days[getDayNum() + dayNum]}
			</Text>
			<Text style={{ 'minWidth': 25, 'fontWeight': 'bold' }}>
				{temp}°
			</Text>
			<Text style={{ 'minWidth': 20, 'color': '#919191' }}>
				{low}°
			</Text>
			<Image style={{ 'minWidth': 30, 'minHeight': 30, 'marginLeft': 35 }} alt="src" src={getIcon(src)} />
			<Text style={{ 'fontSize': 15, 'paddingLeft': 10, 'color': '#919191' }}>
				{weather?.length > 13 ? weather.slice(0, 13).split(' ').map(string => string.slice(0, 1).toUpperCase() + string.slice(1)).join(' ') + '..' :
					weather.split(' ').map(string => string.slice(0, 1).toUpperCase() + string.slice(1)).join(' ')}
			</Text>
		</View>
	)
}

export default DayComponent