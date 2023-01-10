
import React from 'react'
import './styles.css'
import { TbCurrentLocation } from 'react-icons/tb'
import cloud2 from '../../assets/cloud2.png'
import {IoLocationSharp} from 'react-icons/io5'

const InfoLocation = () => {

	return (
		<div className="infoLocation">
			<div className='search'>
				<button className='button'>Search for places</button>
				<TbCurrentLocation className='location'/>
			</div>
			<div className="cloud-img">
				<img src={cloud2} />
			</div>
			<div>
				<h1 className='temp'>15<span style={{marginTop:60,fontSize:70,color:'#A09FB1',fontWeight:300}}>°c</span></h1>
			</div>
			<div className='info'>
				
				<h1 style={{color:'#88869D',justifyItems:'center',marginBottom:'90px',fontSize:'36px'}}>Shower</h1>
				<h4 style={{color:'#88869D',marginTop:'10px',marginBottom:'30px'}}>Today  Fri, 5 Jun  </h4>
				<h3 style={{color:'#88869D',}}><IoLocationSharp className='icon-location'/>Helsinki</h3>
			</div>
		</div>
	)


}

export default InfoLocation