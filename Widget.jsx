import './Widget.css'
import React, { useEffect, useState } from 'react'
import img from './game.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InfoIcon from '@mui/icons-material/Info';
import WidRecom from './widRecom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Widget() {
    let path = "https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
    let [arr, setArr] = useState([])

    useEffect(() => {
        api()
        console.log(arr);

    }, [])

    async function api() {
        let response = await fetch(`https://dummyjson.com/users?limit=3&skip=5`)
        let Users = await response.json()
        setArr(Users.users)
    }
    return (
        <div className='Widget'>

            <div className="gameCard">
                <h3>Today's puzzle</h3>
                <div className="container">
                    <img src={img} alt="Zip" height={50} style={{ margin: "3px", marginRight: "6px" }} />
                    <div className="div" style={{ display: "flex", flexDirection: "", alignItems: "center" }}>
                        <div className="text" style={{ display: "flex", flexDirection: "column", }}>
                            <h3>Zip - a quick brain teaser</h3>
                            <p style={{ fontSize: "14px", margin: "3px 0px" }}>Solve in 60s or less</p>
                            <p style={{ fontSize: "14px", margin: "5px -4px", display: "flex", alignItems: "center", color: "grey" }}><VisibilityOffIcon sx={{ height: 14 }} /> Score is private to you</p>
                        </div>
                        <ArrowForwardIosIcon sx={{ height: 12, color: "grey" }} />
                    </div>
                </div>
            </div>

            <div className="cards">
                <div className="top">
                    <h5>Add to your feed</h5>
                    <InfoIcon sx={{ height: 17, width: 17 }} />
                    {/* icon */}
                </div>
                <div className="Cards">
                    {arr.map(user => (
                        <div key={user.id}>
                            <WidRecom object={user} />
                        </div>
                    ))}
                </div>
                <p style={{ margin: "10px 15px", display: "flex", alignItems: "center", fontSize: 15 }}>View all recommendations &ensp;<ArrowForwardIcon sx={{ height: 17, marginTop: "5px" }} /></p>
            </div>
            <img style={{ marginTop: "10px", borderRadius: "5px" }} src={path} alt="Jobs" />
        </div>
    )
}

export default Widget