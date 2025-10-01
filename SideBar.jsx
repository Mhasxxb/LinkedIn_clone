import React from 'react'
import "./SideBar.css"
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SideBottom from './sideBottom.jsx';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import img from "./backGroundImage.png"
function SideBar() {
    return (
        <div className='SideBar'>
            
            <div className="sideBarTop">
                <img src = {img} alt="bgpic" style={{margin:"0px",padding:"0px", width:"100%"}}/>
                <div className='sideBarTop_base'>
                <Avatar sx={{border: "2px solid white", height: 70, width: 70}} alt="Muhammad Haseeb" src="https://media.licdn.com/dms/image/v2/D4E03AQEj3bKEviZc4A/profile-displayphoto-shrink_200_200/B4EZkZlbaUIMAg-/0/1757070866376?e=1759968000&v=beta&t=62Sg3uJfSk9VafhtOTrYC3IIxxrRb40trIeCQ4UYl9Q" />
                <h2 style={{width:"200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow:"ellipsis"}}>Muhammad Haseeb</h2>
                <p>abcd.test@gmail.com</p>
                <div className="experience">
                    <AddIcon />
                    <input type="text" className='inputBar' placeholder='Experience' />
                </div>
                </div>

            </div>

            <div className="sideBarStats">
                <div className="sideBarStat">
                    <p style={{marginBottom:"17px"}}>View all analytics</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                        <p style={{ marginTop: "5px" }}>Connections</p>
                        <PersonAddAlt1Icon sx={{fontSize:20}}/>
                    </div>
                    <p style={{ color: "grey" }}>Grow your network</p>
                </div>

            </div>
            <div className="sideBarBottom">
                <SideBottom Icon={BookmarkIcon} title = "Saved" />
                <SideBottom Icon={GroupsIcon} title = "Groups" />
                <SideBottom Icon={ArticleOutlinedIcon} title = "Newsletter" />
                <SideBottom Icon={CalendarTodayOutlinedIcon} title = "Events" />

                {/* saved
                grps
                newsletter
                events */}
            </div>
        </div>
    )
}

export default SideBar