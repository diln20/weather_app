import { useEffect,useState } from 'react'
import getWeather from '../services/getWeather'

export default function useWeather() {

	const [wind, setWind] = useState('7')
	const [humidity, setHumidity] = useState('10')
	const [preassure, setPressure] =useState('998')
	const [visibility,setVisibility] = useState('15')
	const [forecastday,setForecastday] = useState([])
	useEffect(function ()  {
		getWeather().then((data) => {
			setHumidity(data.humidity)
			setWind(data.wind_mph)
			setVisibility(data.vis_miles)
			setPressure(data.pressure_mb)
			setForecastday(data.forecastday)
            
		})
		
	}, [])


	return {humidity, wind, visibility, preassure,forecastday}
}
