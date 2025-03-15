import React from 'react'
import './Login.css' 
import LoginIcon from '@mui/icons-material/Login';

const Login = ({funcSetLogin}) => {
  const handleClickNotRegistered = ()=>{
    funcSetLogin(false);
  }
  return (
    <div className='login'>

        <div className='login-card'>

          <div className='card-name'>
            Login
            <LoginIcon/>
          </div>

          <div className='login-form'>
            <input className='inputBox' type='text'placeholder='Enter Mobile number' />
            <input className='inputBox' type='text'placeholder='Enter Password'/>
            <div className='button'> Login </div>
            <div className='linkedLinks' onClick={handleClickNotRegistered}> Not Registered Yet </div>
          </div>

        </div>

    </div>
  )
}

export default Login