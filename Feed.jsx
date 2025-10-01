
import Avatar from '@mui/material/Avatar';
import "./Feed.css"
import Recommendations from "./Recommendations.jsx"
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoIcon from '@mui/icons-material/Photo';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useEffect, useState } from 'react';

function Feed() {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        reccomendations()    
    },[])

    async function reccomendations() {   
        let response = await fetch(`https://dummyjson.com/users?limit=3&skip=0`)
        response = await response.json()
        setUsers(response.users)
    }
    
    
    
    

    return (
        <div className='Feed'>
            <div className="feedTop">
                <div className='post'>
                    <Avatar sx={{ marginLeft: "10px", border: "2px solid white", height: 55, width: 55 }} alt="Muhammad Haseeb" src="https://media.licdn.com/dms/image/v2/D4E03AQEj3bKEviZc4A/profile-displayphoto-shrink_200_200/B4EZkZlbaUIMAg-/0/1757070866376?e=1759968000&v=beta&t=62Sg3uJfSk9VafhtOTrYC3IIxxrRb40trIeCQ4UYl9Q" />
                    <div type="text" className='postBar'><strong>Start a post</strong> </div>
                </div>
                <div className="icons">
                    <span className='postIcons' style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><YouTubeIcon fontSize='medium' sx={{ color: "#40a354fc", marginRight:"7px"}} /> Video</span>
                    <span className='postIcons' style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><PhotoIcon fontSize='medium' sx={{ color: "rgba(50, 129, 182, 0.93)", marginRight:"7px"}} /> Photo</span>
                    <span className='postIcons' style={{ display: "flex", alignItems: "center", cursor: "pointer" }}><ArticleOutlinedIcon fontSize='medium' sx={{ color: "rgba(238, 118, 38, 0.93)", marginRight:"7px"}} />Write article</span>
                </div>

            </div>

            <hr style={{ display: "flex", color: "black", width: "90%", }} />

            <div className="feedBottom">

                <h6 style={{padding:"10px",marginLeft:"17px", marginBottom:"17px"}}>Recommended for you</h6>
                {users.map(object=>{
                    return <div key={object.id}>
                        <Recommendations  object = {object}/>
                    </div>
                    
                })
                }
                <div style={{display:"flex",alignItems:"center", justifyContent:"space-around", margin:"5px 250px 10px 250px", }} className='showMore'><p>Show more </p><EastOutlinedIcon fontSize='small' /></div>
            </div> 
                <button style={{marginLeft:"30px", marginTop:"40px", padding:"0px 8px"}} className='seeMore-btn'>See new posts</button>
            

        </div>
    )
}

export default Feed