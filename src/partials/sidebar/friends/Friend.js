import React from 'react' 
import "./friend.css"
// user is the prop here right? 
// style={{height:"400px",width:"600px",margin:"auto"}}
const Friend = ({user}) => {
  return (
    <li className='sidebarFriend'> 
    <ul>   <img className="sidebarFriendImage" src={user.profilePicture} alt="the profile picture of the displayed user" />
     
        <span className='sidebarFriendName'>{user.username}</span> </ul>
    </li>
  )
}

export default Friend