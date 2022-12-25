import React from 'react'
import "./share.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src="/images/model_1.jpg" />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="What's on your mind?" variant="outlined" />
          </Box>

        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <PermMedia color="secondary" className='shareIcon'> </PermMedia>
              <span className='shareOptionText'>Photos</span>

            </div>
            <div className='shareOption'>
              <Label color="success" className='shareIcon'> </Label>
              <span className='shareOptionText'>Tag</span>

            </div>
            <div className='shareOption'>
              <Room sx={{ color: " #1c39bb" }} className='shareIcon'>  </Room>
              <span className='shareOptionText'>Location</span>

            </div>
            <div className='shareOption'>
              <EmojiEmotions sx={{ color: "goldenrod" }} className='shareIcon'> </EmojiEmotions>
              <span className='shareOptionText'>Emotions</span>

            </div>
          </div>
          <div>

            <Button variant="contained" sx={{ backgroundColor: " #1c39bb" }} className="shareButton">Share</Button>


          </div>


        </div>


      </div>
    </div>
  )
}

export default Share