import { View, Text } from 'react-native';

const getDayAndTime = () => {
	let fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	let d = new Date()
	return `${fullDays[d.getDay()]}, ${d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()} ${d.getHours() > 11 ? 'PM' : 'AM'}`
}

const HeaderSection = ({ location }) => {
	return (
		<>
			<View style={{ 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%', 'marginTop': 20 }}>
				<Text style={{ 'fontSize': 25, 'fontWeight': 'bold' }}>
					{`${location[0]?.city}, ${location[0]?.region}`}
				</Text>
				<Text>
					=
				</Text>
			</View>
			<View style={{ 'justifyContent': 'flex-start', 'width': '100%', 'marginTop': 5 }}>
				<Text style={{ 'fontSize': 20, 'color': '#919191' }}>
					{getDayAndTime()}
				</Text>
			</View>
		</>
	)
}

export default HeaderSection