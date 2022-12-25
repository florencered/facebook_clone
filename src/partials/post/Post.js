import React from 'react'; 
import "./post.css"; 
import { MoreVert } from '@mui/icons-material'; 
import { Users } from '../../Data'; 
import { useState } from 'react';

const Post = ({post}) => {
  const [like,setLike]=useState(post.like); 
  const [isLiked,setIsLiked]=useState(false); 
  const likeHandler=()=>{
    setLike()
  }
  return (
    <div className='post'> 
    <div className='postWrapper'> 
    <div className='postTop'> 
    <div className='postTopLeft'>
      <img className='postProfileImg' src={}/>
      <span className='postUsername'></span> 
      <span className='postDate'>{post.date}</span>
    </div>

    </div> 
    <div className='postBottom'>

    </div>

    </div>
 
    </div>
  )
}

export default Post