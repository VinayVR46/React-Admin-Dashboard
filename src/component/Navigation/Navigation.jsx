import {React, useState} from 'react'
import "./Navigation.css"
import Nav from '../NavTemplate/Nav'
import {TbLayoutDashboard} from "react-icons/tb"
import {MdTableChart} from "react-icons/md"
import {FiChevronLeft} from "react-icons/fi"
import {GoSignOut} from "react-icons/go"
import {IoAnalyticsOutline} from "react-icons/io5"
import infinity from "../../images/infinity.png"

import {auth} from "../../Firebase"

import { signOut } from 'firebase/auth'



function Navigation() {
  const [nav, setNav] = useState(false)
  
  return (
    <div className={`navigation ${nav && "active"  }`}>
      <div className={`menu ${nav && "active" }`} onClick={()=>{
        setNav((prevState) => (!prevState))
      }}>
      <FiChevronLeft/>
      </div>
        <header>
            <div className="profile">
                <img src={infinity}alt="" className="profile-img" />
            </div>
            <span>Creative_ambition</span>
        </header>
        <Nav title="Dashboard" Icon={TbLayoutDashboard}/>
        <Nav title ="Table" Icon={MdTableChart}/>
        <Nav title ="Analytics" Icon={IoAnalyticsOutline}/>
        <div className="divider"></div>
        <Nav title="Change Account" Icon={TbLayoutDashboard}/>
        
        <button onClick={()=>{
          console.log("rap")
          signOut(auth)
        }}>
          {<Nav title={"Signout"} Icon={GoSignOut} />}
          </button>
       
    </div>
  )
}

export default Navigation