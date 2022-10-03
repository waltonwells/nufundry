import React from 'react'
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.png'
import navicon from '../../assets/navicon.png'
import LINKEDIN from '../../assets/LINKEDIN.png'
import TWITTER from '../../assets/TWITTER.png'
import INSTAGRAM from '../../assets/INSTAGRAM.png'
import FACEBOOK from '../../assets/FACEBOOK.png'
import DISCORD from '../../assets/DISCORD.png'
import './navbar.css'

// BEM  Block Element Modifier
const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
        <div className='gpt3_navbar-links'>
          <div className='gpt3_navbar-links_logo'>
           <img src={logo} alt='logo' />
          </div>
          <div className='gpt3_navbar-icon'>
            <img src={navicon} alt='navicon' />
          </div>
          <div className='social-icons'>
            <div className='linkedin'>
              <img src={LINKEDIN} alt='linkedin' />
            </div>
            <div className='twitter'>
              <img src={TWITTER} alt='twitter' />
            </div>
            <div className='instagram'>
              <img src={INSTAGRAM} alt='instagram' />
            </div>
            <div className='facebook'>
              <img src={FACEBOOK} alt='facebook' />
            </div>
            <div className='discord'>
              <img src={DISCORD} alt='discord' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar