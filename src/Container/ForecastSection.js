import { View, Text } from 'react-native';
import DayComponent from '../Components/DayComponent';

const ForecastSection = ({ data }) => {
  return (
    <View style={{ 'height': 350, 'width': '100%', 'backgroundColor': '#e8e8e8', 'padding': 20, 'borderRadius': 20 }}>
      <Text style={{ 'fontSize': 20, 'fontWeight': 'bold', 'marginBottom': 15 }}>
        This Week
      </Text>
      {data?.daily?.slice(1, 8).map((day, i) => {
        return <View style={{ 'width': 290, 'height': 40 }} key={i}>
          <DayComponent
            dayNum={i + 1}
            temp={Math.round(day.temp.day)}
            low={Math.round(day.temp.min)}
            src={day.weather[0].icon}
            weather={day.weather[0].description}
          />
        </View>
      })}
    </View>
  )
}

export default ForecastSection