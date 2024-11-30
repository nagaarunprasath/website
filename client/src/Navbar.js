import React from 'react'
import Logo from './assests/th.jpg'
import './navbar.css'
import { CiMenuFries } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";



const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="headername">
            <div className="logo">
            <img src={Logo}alt="" className='logo'/>

            </div>
        <h2>ARUL ANANDAR COLLEGE</h2>
        </div>
        <div className="icon">
            <div className="accounts">
                <RiAccountPinCircleFill />

            </div>
            <div className="notification">
            <IoIosNotifications />
            </div>
            <div className="menuiconn">
            <CiMenuFries />
            </div>

        </div>
      
      </nav>
      <div className="menu">
         <ul>
            <li>Noticeboard</li>
            <li>News and stories</li>
            <li>About</li>
            <li>Settings</li>
            <li>My Profile</li>
            <li>Logout</li>

            
         </ul>
        </div>
    </div>
  )
}

export default Navbar
