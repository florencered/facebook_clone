// import Header from "../../partials/feed/header/Header"; 
import Share from "../../partials/feed/share/Share" 
import Post from "../../partials/post/Post" ; 
import Header from "../../partials/feed/header/Header";
import {Posts} from "../../Data.js"
import React from 'react';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Header/>
        <Share/> 
        {
          Posts.map((p)=>(<Post post={p} key={p.id}/>))
        }
      </div>
    </div>
  )
}

export default Feed