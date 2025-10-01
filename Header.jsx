import React from 'react'
import {useRef} from 'react'
import "./Header.css"
import Option from "./Option.jsx"
import SearchIcon from '@mui/icons-material/Search';
import { Routes, Route, Link } from 'react-router'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { Avatar } from '@mui/material';
import Home from './Home.jsx';
function Header() {
    const path = "https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/277519684_10158675188522823_7436488509713286219_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE1SCkyD9sXNmZKfNoOhvhTXJJvMd2flLRckm8x3Z-UtMmcIQw3wmkozCLzbP8d5ZfTT3xo7q_eN77w8TNv6agk&_nc_ohc=ztBusNJYSh8Q7kNvwEDFfLX&_nc_oc=Adlfc0DyvR8ZMd9HczLMIX8In2_3olkknI-QXRRyJY64I_wgZCQlHYHAWl0MHoblYIU&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&_nc_gid=qpT7aOzERLfMVIm6shQ89w&oh=00_AfbhFy0oEEAuSOXK7a7CNd8mOd4PrSgT8WMWMXMAfvuXMA&oe=68C092AB"
    const srchBar = useRef()
  return (
    <div className='header'>
        <div className="headerLeft">
            <img src={path} alt="logo" />
            <div onClick={()=>{
                srchBar.current.focus()
            }} className="search">
                <SearchIcon />
                <input ref={srchBar} type="text" className='searchBar' placeholder='Search' /> 
            </div>
        </div>
        <div className="headerRight">
            <Link to = "/"><Option Icon = {HomeSharpIcon} title = "Home"/></Link>
            <Option Icon = {PeopleIcon} title = "Networks"/>
            <Option Icon = {BusinessCenterRoundedIcon} title = "Jobs"/>
            <Option Icon = {InsertCommentRoundedIcon} title = "Messaging"/>
            <Option Icon = {NotificationsRoundedIcon} title = "Notifications"/>
            <Option Icon = {Avatar} title = "Me" path = "https://media.licdn.com/dms/image/v2/D4E03AQEj3bKEviZc4A/profile-displayphoto-shrink_200_200/B4EZkZlbaUIMAg-/0/1757070866376?e=1759968000&v=beta&t=62Sg3uJfSk9VafhtOTrYC3IIxxrRb40trIeCQ4UYl9Q" Icon2 = {ArrowDropDownOutlinedIcon}/>
        </div>
    </div>
  )
}

export default Header