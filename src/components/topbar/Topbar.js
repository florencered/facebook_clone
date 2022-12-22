import React from 'react';
import "./topbar.css" 
import { Link } from 'react-router-dom';
import { Search,Notifications,Chat,Person } from '@mui/icons-material';


const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
               <Link to='/' className='logo'>Facebook</Link>
        </div> 
        <div className="topbarCenter">
            <div className='searchBar'>
                <Search className="searchIcon"/> 
                <form>
                    <input placeholder='search on facebook' className='searchInput'></input>
                </form>
            </div>
        </div>
        <div className="topbarRight"> 
        {/* //for icons  */}
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/> 
                <span className='topbarIconBadge'>1</span>
            </div> 
            <div className="topbarIconItem">
                <Chat/> 
                <span className='topbarIconBadge'>1</span>
            </div> 
            
            <div className="topbarIconItem">
                <Notifications/> 
                <span className='topbarIconBadge'>1</span>
            </div> 
           
        </div>
         

        </div>
    </div>
  )
}

export default Topbar