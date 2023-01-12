/* eslint-disable quotes */

import './styles.css'
import React from 'react'
import GeneralCard from '../GeneralCard/GeneralCard'
import DashInfo from '../dashInfo/DashInfo'
import StatisticInfo from '../StatisticsInfo/StatisticInfo'
import useWeather from '../../Hooks/useWeather'
// import useInfo from '../../Hooks/useInfo'


const GeneralInfo = () => {
	const {humidity, wind, visibility, preassure,forecastday}= useWeather()

	return (
		<div className="general-info">
			<div className='button-temp'>
				<button className='celcius'>°C</button>
				<button className='farenheit'>°F</button>
			</div> 
			<div className='dash-board'>
				<ul className='general-list'>
					{
						forecastday.map((info,index) => {
							return <GeneralCard key={index} day={info.date}  tempA={info.day.maxtemp_c} tempB={info.day.mintemp_c}/>
						})
					}
					{/* <GeneralCard day='Tomorrow' weather='winter' tempA='16°c' tempB='11°c' />
					<GeneralCard day='Sun, 7 Jun' weather='winter'tempA='16°c' tempB='11°c' />
					<GeneralCard day='Mon, 8 Jun' weather='thunderd' tempA='16°c'tempB='11°c'/>
					<GeneralCard day='Tue, 9 Jun' weather='cloudsun' tempA='16°c' tempB='11°c'/>
					<GeneralCard day='Wed, 10 Jun 'weather='Rain' tempA='16°c' tempB='11°c'/> */}
				</ul>
				<h1>Today`s Hightlights</h1>
				<div  className='dash-list'>
					<ul>
						<li><DashInfo cant={wind} status='Wind Status'/></li>
						<li><DashInfo cant={humidity} status='Humidity'/></li>
					</ul>
				</div>
				<div  className='dash-list'>
					<ul>
						<li><StatisticInfo stat='Visibility' unit={`${visibility} miles`}/></li>
						<li><StatisticInfo stat='Air Pressure' unit={`${preassure} mb`}/></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default GeneralInfo