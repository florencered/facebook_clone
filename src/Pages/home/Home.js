import React from 'react'
import Topbar from '../../components/topbar/Topbar'; 
import Feed  from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar'; 
import Rightbar from '../../components/rightbar/Rightbar'; 
const Home = () => {
  return (
    <div>
      <Topbar/> 
      <div classsName="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>

    </div>
  )
}

export default Home;