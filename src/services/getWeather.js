/* eslint-disable no-undef */

const {VITE_API_URL,VITE_API_KEY}= import.meta.env
const fromApiResponseToWeather = apiResponse => {
	const {current,location,forecast}=apiResponse
	const {forecastday}=forecast
	const {temp_c}= current
	const {name}= location
	const {country}= location
	const {text} = current.condition
	const {localtime} = location
	const {wind_mph}= current
	const {humidity}= current
	const {pressure_mb}= current
	const {cloud}= current
	const {vis_miles}= current
	return {forecastday,name,temp_c,country,text,localtime,wind_mph,humidity,pressure_mb,cloud,vis_miles}
}


export default function getWeather({
	keyword = 'Pamplona Colombia',
} = {}) {
	const apiURL= `${VITE_API_URL}forecast.json?key=${VITE_API_KEY}&q=${keyword}&days=5&aqi=no&alerts=no`
	return fetch(apiURL)
		.then((res) => res.json())
		.then(fromApiResponseToWeather)
}