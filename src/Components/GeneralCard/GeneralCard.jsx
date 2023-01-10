import './styles.css'
import React from 'react'
import thunderd from '../../assets/thunder.png'


const GeneralCard = () => {
	return(
		<div className='general-card'>
			<h1 style={{color:'white'}}>Tomorrow</h1>
			<div className='img-card'>
				<img src={thunderd} height={80} width={80}></img>
			</div>
			<ul className='temp-card'>
				<li style={{color:'white'}}>16°C</li>
				<li style={{color:'#A09FB1'}}>11°C</li>
			</ul>

		</div>
	)
}


export default GeneralCard