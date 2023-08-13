import { View, Text } from 'react-native'

const HeaderSection = () => {
	return (
		<>
			<View style={{ 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%', 'marginTop': 20 }}>
				<Text style={{ 'fontSize': 25, 'fontWeight': 'bold' }}>
					Location, Location
				</Text>
				<Text>
					Icon
				</Text>
			</View>
			<View style={{ 'justifyContent': 'flex-start', 'width': '100%', 'marginTop': 5 }}>
				<Text style={{ 'fontSize': 20, 'color': '#919191' }}>
					Day, Time
				</Text>
			</View>
		</>
	)
}

export default HeaderSection