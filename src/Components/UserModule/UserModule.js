/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faLock} from '@fortawesome/free-solid-svg-icons'
import './UserModule.css'

const UserModule = () => {

  return (
    <div className='Main'>
      <div className='User-Login-Form'>
      
        <div className='log-In'>
      
            <form action="">
              <h1>LogIn</h1>
              <div className="Input-box">
      
                <input type="text"  id='User'  placeholder='UserName'/>
                <FontAwesomeIcon className='icon' icon={faUser} />
              </div>
      
              <div className="Input-box">
      
                <input type="password" placeholder='Password'/>
                <FontAwesomeIcon className='icon' icon={faLock} />
              </div>
              <div className="forgot-remember">
                <label><input type="checkbox" name="" id="" />remember me </label>
                <a href="#">forget password?</a>
              </div>
              <button className='login-button' ><Link to='/roofTopImage' id='logIn'>Log In</Link></button>
              <div className="sign-up">
                <p>Don't have an account? <Link to='/userRegister'>sign up</Link></p>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UserModule
