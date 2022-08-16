import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import profile from '../../assets/profilePhoto.jpg'

function Navbar() {
    return (
        <nav className="navbar">
            <img src={profile} alt='profile' className='profile-photo' />
            <ul className='menuItems'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar