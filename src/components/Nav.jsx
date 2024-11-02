import React, { useState } from 'react'
import './style.css'
import { MdMenu } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { FaHandsClapping } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { BiSolidInstitution } from "react-icons/bi";
import SidePannel from './DateSheet';
import { Menu } from './Menu';
const Nav = () => {
  const [notify, setnotify] = useState(false)
  const [loginbox, setlogin] = useState(false)
  const [sideMenu, setside] = useState(false)


  const togglebell = () => {
    setnotify(!notify)
  }

  const togglesidemenu = () => {
    setside(!sideMenu)
  }

  return (
    <>
      <Menu isOpen={sideMenu} />
      <div id='person' style={{ display: loginbox ? "block" : "none" }}>
        <div id='info'>
          <img src='https://i.pinimg.com/474x/cc/ae/4b/ccae4bc8117c4833fd9cd17468657016.jpg' />
          <h2>Erik Brown</h2>
          <p>View/Edit Profile</p>
        </div>
        <hr />
        <div id='btn-con'>
          <button className='btn'>Login History</button>
          <button className='btn'><IoMdExit style={{ color: "red", fontSize: "1.2rem" }} /> Logout</button>
        </div>

      </div>

      <div id='notify' style={{ top: notify ? "10vh" : "-90vh" }}>
        <h2>NOTIFICATIONS</h2>
        <div className='notify-divs'>
          <h3><BiSolidInstitution style={{ fontSize: "1rem", marginRight: "0.4rem", color: "blue" }} />Edit your information in one swipe</h3>
          <p>Sometimes, creativity thrives in unexpected moments, leading to ideas that spark joy, growth, and inspiration across every part of life</p>
          <span>Jan 13 2023</span>
        </div>
        <div className='notify-divs'>
          <h3><IoCheckmarkDone style={{ fontSize: "1rem", marginRight: "0.4rem" }} />Edit your information in one swipe</h3>
          <p>Sometimes, creativity thrives in unexpected moments, </p>
          <span>Jan 13 2023</span>
        </div>
        <div className='notify-divs'>

          <h3><FaHandsClapping style={{ color: "Yellow", fontSize: "1rem", marginRight: "0.4rem" }} />Edit your information in one swipe</h3>
          <p>Sometimes, creativity thrives in unexpected moments, leading to ideas that spark joy, growth, </p>
          <span>Jan 13 2023</span>
        </div>
      </div>
      <nav>
        <div id='logo'>
          <img src='https://i.pinimg.com/474x/82/be/f1/82bef166b4834cfa9d1dd52e9e081315.jpg' />
          <MdMenu id='menu-lg' style={{ color: "rgb(14, 14, 109)" }} />
          <h2>School Management System</h2>
        </div>


        <div id='nav-left'>
          <p>Last Login-12/02/2024</p>
          <IoIosNotifications className='icons' onClick={togglebell} />
          <IoSettings className='icons  ' onClick={() => {
            setlogin(!loginbox)
          }} />
          <MdMenu id='menu-small' style={{ color: "rgb(14, 14, 109)" }} onClick={togglesidemenu} />
        </div>
      </nav>
    </>


  )
}

export default Nav