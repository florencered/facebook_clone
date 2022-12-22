import React from 'react'
import "./Login.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Florabook</h3> 
                <span className='loginDesc'>Click on your picture or add an account</span>
            </div> 
            <div className='loginUser'>
                <img className='loginUserImg' src="assets/peeps/model_1.jpg"  alt="image of a person"/>
                <div className='loginUserName'>Florence</div>
            </div> 
            <div className='loginRight'>
                <div className="loginBox">
                    <input placeholder='enter email' className='loginInput'/>
                    <input placeholder='enter password' className='loginInput'/> 
                    <Button variant="contained"  className="loginBtn">Login</Button>
                    
                    <span className='loginForgot'>Forgot Password?</span> 
                    <Button variant="contained"  className="loginBtn">Create new account</Button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Login