/* eslint-disable react/prop-types */
import  React from  'react'
import './styles.css'


const StatisticInfo = ({stat,unit}) => {
	return (
		<div className='statistic'>
			<h3 style={{color:'white'}}>{stat}</h3>
			<h1 style={{fontSize:60}}>{unit}</h1>
		</div>
	)
}


export default StatisticInfo