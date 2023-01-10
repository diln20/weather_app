/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'
import ProgressBar from '@ramonak/react-progress-bar'

const DashInfo= ({cant,status}) => {
	return (
		<div className='dash'>
			<h1>{status}</h1>
			{status==='Wind Status'?(
				<><h1 style={{fontSize:80}}>{cant}<span style={{marginTop:60,fontSize:40,fontWeight:300}}>mph</span></h1><h1>wsw</h1></>)
				:<><h1 style={{fontSize:70,marginBottom:10}}>{cant}<span style={{marginTop:60,fontSize:40,fontWeight:300}}>%</span></h1><ProgressBar completed={cant} width={'16em'} height={12} baseBgColor='white' bgColor='#FFEC65' labelColor='rgba(0,0,0,0.0)'/></>}
			
		</div>
	)
}

export default DashInfo