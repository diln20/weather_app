/* eslint-disable react/prop-types */
import './styles.css'
import React from 'react'


const GeneralCard = ({day='Tomorrow',weather='thunder',tempA='16°c',tempB='11°c'}) => {
	return(
		<li>
			<div className='general-card'>
				<h1 style={{color:'white'}}>{day}</h1>
				<div className='img-card'>
					<img src={`../src/assets/${weather}.png`} height={80} width={80}></img>
				</div>
				<ul className='temp-card'>
					<li style={{color:'white'}}>{tempA}°c</li>
					<li style={{color:'#A09FB1'}}>{tempB}°c</li>
				</ul>
			</div>
		</li>
	)
}


export default GeneralCard