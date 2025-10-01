import React from 'react'

function Option({ Icon, title, path ,Icon2}) {

  return (
    <div className='Option'>
      
      {Icon && path && <Icon sx={{ height: 25, width: 25 }} src={path} />}
      {Icon && !path && <Icon sx={{ fontSize: 20 }} />}
      {!Icon2 &&<p> {title} </p>}
      {Icon2 &&<><span style={{display:"flex", alignItems:"center"}}><p style={{margin:"0px", fontSize:"2"}}> {title} </p><Icon2 /></span></> }

    </div>
  )
}

export default Option