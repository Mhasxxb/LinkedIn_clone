import React from 'react'

function sideBottom({ Icon, title }) {
    return (        
            <div className='bottom'>
                {Icon && <Icon />}
                <h5>&ensp;{title}</h5>
            </div>
    )
}
export default sideBottom