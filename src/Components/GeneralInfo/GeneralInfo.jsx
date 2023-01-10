
import './styles.css'
import React from 'react'
import GeneralCard from '../GeneralCard/GeneralCard'
import DashInfo from '../dashInfo/DashInfo'
import StatisticInfo from '../StatisticsInfo/StatisticInfo'


const GeneralInfo = () => {
	return (
		<div className="general-info">
			<div className='button-temp'>
				<button className='celcius'>°C</button>
				<button className='farenheit'>°F</button>
			</div> 
			<div className='dash-board'>
				<ul className='general-list' >
					<li><GeneralCard/></li>
					<li><GeneralCard/></li>
					<li><GeneralCard/></li>
					<li><GeneralCard/></li>
					<li><GeneralCard/></li>
				</ul>
				<h1>Today`s Hightlights</h1>
				<div  className='dash-list'>
					<ul>
						<li><DashInfo cant='7' status='Wind Status'/></li>
						<li><DashInfo cant='84' status='Humidity'/></li>
					</ul>
				</div>
				<div  className='dash-list'>
					<ul>
						<li><StatisticInfo stat='Visibility' unit='6,4 miles'/></li>
						<li><StatisticInfo stat='Air Pressure' unit='998 mb'/></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default GeneralInfo