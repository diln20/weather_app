import { useState, useEffect } from 'react'
import getWeather from '../services/getWeather'


const useInfo = () => {
	const [name, setName] = useState('Helsinsi')
	const [weat, setWeat] = useState('Shower')
	const [date, setDate] = useState('Today Friday,5 Jun')
	const [temp, setTemp] = useState('15')
	const [country, setCountry] = useState('Colombia')
	useEffect(() => {
		return () => {
			getWeather('Pamplona').then((data) => {
				setName(data.name)
				setTemp(data.temp_c)
				setWeat(data.text)
				setDate(data.localtime)
				setCountry(data.country)
			})
		}
	})
	return {name,weat,date,temp,country}
}

export default useInfo