import React from 'react'
import SideBar from './SideBar.jsx'
import Feed from './Feed.jsx'
import './App.css'
import Widget from "./Widget.jsx"

function Home() {
    return (
        <div>
            <div className="AppBody">
                <SideBar />
                <div className='bodyRight' style={{ flex: "0.6", height: "1000px" }}>
                    <Feed />
                    <Widget />
                </div>
            </div>

        </div>
    )
}

export default Home