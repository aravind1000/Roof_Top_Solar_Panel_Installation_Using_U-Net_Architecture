import React from 'react'
import Logo from '../../images/Logo.avif'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div>
      <div className='Nav-bar'>
        <div className="Nav-left">
            <img src={Logo} alt="" />
            <h3 id=''>RenewAi</h3>
        </div>
        <div className="Nav-right">
            <ul>
                <li>Home</li>
                <li>Profile </li>
                <li><FontAwesomeIcon className='icon' icon={faGear} /></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
