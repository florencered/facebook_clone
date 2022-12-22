import { Bookmark, PlayCircleFilled, RssFeed, School, WorkOutline,Chat,Group,Event, Diversity1Outlined } from '@mui/icons-material'
import React from 'react' 
import Friend from '../../partials/sidebar/friends/Friend'
import { Users } from '../../Data'
import "./sidebar.css"
import { Link } from 'react-router-dom' 
import Feed from '../feed/Feed' 
// import Image1 from "../../../public/images/model_1.jpg"; 
// import Image from "../../assets/peeps_model_2.jpg"
const Sidebar = () => {
  return (
    <div className="sidebar"> 
    <div className="sidebarWrapper">
      <ul className='sidebarList'>
        <li className='sideBarPersonContainer'>"
          <img className='sidebarPerson' src="/images/model_1.jpg" alt="photo of the user"/>
          <Link to="/florared" className='sidebarPersonName'>Flora Red</Link>
        </li>
        <li className='sidebarListItem'>
          <Group className="sidebarIcon"/>
          <span className='sidebarListItemText'>Friends</span>
        </li> 
        <li className='sidebarListItem'>
          <RssFeed className="sidebarIcon"/>
          <span className='sidebarListItemText'>Feed</span>
        </li> 
        <li className='sidebarListItem'>
          <Chat className="sidebarIcon"/>
          <span className='sidebarListItemText'>Messages</span>
        </li> 
        <li className='sidebarListItem'>
          <WorkOutline className="sidebarIcon"/>
          <span className='sidebarListItemText'>Company</span>
        </li> 
        <li className='sidebarListItem'>
          <Bookmark className="sidebarIcon"/>
          <span className='sidebarListItemText'>Bookmarks</span>
        </li> 
        <li className='sidebarListItem'>
          <PlayCircleFilled className="sidebarIcon"/>
          <span className='sidebarListItemText'>Videos</span>
        </li> 
       
        
        



      </ul> 
      <button className="sidebarButton">Show More</button> 
      <hr className='sidebarHr'></hr> 
      <span className='sidebarFriendListPersons'>Friends</span>
      <ul className='sidebarFriendListPersons'>
        {Users.map(u=>
        // basically a prop with a key,passing actual user along with their id 
        <Friend user={u} key={u.id}/>)}
      </ul>
      </div>
    </div>

   
  )
}

export default Sidebar