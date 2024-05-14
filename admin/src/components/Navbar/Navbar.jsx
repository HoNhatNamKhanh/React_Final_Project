import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <Link  to='http://localhost:5173/'><button className='home-button'>Home Page</button></Link>
    </div>
  )
}

export default Navbar