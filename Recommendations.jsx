import React from 'react'
import "./Recommendations.css"
import { Avatar } from '@mui/material'

function Recommendations({object}) {
  console.log(object);
  
  return (
    <>
    <div className="recommendations">
        <div className="avatar"><Avatar sx={{height: 40, border:"solid 1px", width: 40 }} src={object.image} /></div>
        <div className="details">
            <h5>{object.firstName} {object.lastName}</h5> 
            <p style={{fontSize:"12px"}}>{object.university}</p>           
            <p style={{fontSize:"15px"}}>{object.address.address}, {object.address.city}, {object.address.state}, {object.address.country}</p>
        </div>
        <button className='follow-btn'>+ Follow</button>
    </div>

    <hr style={{margin:"15px 24px", color:"rgba(154, 161, 161, 0.91", transition: "background 0.1s ease, color 0.1s ease"}}/>
    </>
  )
}

export default Recommendations