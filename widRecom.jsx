import React from 'react'
import "./widRecom.css"
import { Avatar } from '@mui/material'

function WidRecom({object}) {

  return (
    <>
    <div className="recommendations">
        <div className="avatar"><Avatar sx={{height: 40, border:"solid 1px", width: 40, marginRight:"10px"}} src = {object.image}/></div>
        <div className="details">
            <h5>{object.firstName}</h5> 
            <p style={{fontSize:"12px", width:"175px", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{object.university}</p>
        </div>
    </div>
    <button style={{marginLeft:"75px", marginTop:"5px"}} className='btn'>+ Follow</button>
    </>
  )
}

export default WidRecom