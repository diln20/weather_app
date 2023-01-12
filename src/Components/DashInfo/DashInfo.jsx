/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { FaLocationArrow } from 'react-icons/fa'
const DashInfo= ({cant,status}) => {
	return (
		<div className='dash'>
			<h1>{status}</h1>
			{status==='Wind Status'?(
				<><h1 style={{fontSize:80}}>{cant}<span style={{marginTop:60,fontSize:40,fontWeight:300}}>mph</span></h1>
					<h1><FaLocationArrow className='arrow'/>wsw</h1>
				</>
			)
				:<><h1 style={{fontSize:70,margin:0,fontWeight:700}}>{cant}<span style={{marginTop:60,fontSize:40,fontWeight:300}}>%</span></h1>
					<div className='Bar'>
						<div className='porcent'>
							<ul>
								<li>0</li>
								<li>50</li>
								<li>100</li>
							</ul>
						</div>
						<ProgressBar completed={cant} width={'16em'} height={'10px'} baseBgColor='white' bgColor='#FFEC65' labelColor='rgba(0,0,0,0.0)'/>
						<h1 style={{fontSize:14,textAlign:'end',color:'#A09FB1',marginTop:4}}>%</h1>
					</div></>}

		</div>
	)
}

export default DashInfo


