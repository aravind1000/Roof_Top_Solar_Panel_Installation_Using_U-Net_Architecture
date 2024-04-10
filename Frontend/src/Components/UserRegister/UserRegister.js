import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faLock} from '@fortawesome/free-solid-svg-icons'
import './UserRegister.css'
const UserRegister = () => {
    return (
        <div className="Main">
          <div className='User-Register-Form'>
          
            <div className='Register-form'>
          
                <form action="">
                  <h1>Register</h1>
                  <div className="Input-box">
                    <input type="text" placeholder='Name'/>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                  </div>
                  <div className="Input-box">
                    <input type="text"  id='User'  placeholder='UserName'/>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                  </div>
                  <div className="Input-box">
                    <input type="password" placeholder='Password'/>
                    <FontAwesomeIcon className='icon' icon={faLock} />
                  </div>
                  <button className='sign-up-button'>sign up</button>
                  <div className="sign-in">
                  <p>Already have an account? <Link to='/userModule'>sign in</Link></p>
                  </div>
                </form>
            </div>
          </div>
        </div>
      )
}

export default UserRegister
