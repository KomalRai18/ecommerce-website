import React from 'react'
import './Footer.css'
import facebookLink from '../../assets/facebook.png'
import instagramLink from '../../assets/instagram.png'
import twitterLink from '../../assets/twitter.png'
import iconLink from '../../assets/social.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={iconLink} alt="logo" height='50px'/>
            <p>Shopify</p>

        </div>
        <ul className='footer-links'>
            <li>About</li>
            <li>Product</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={instagramLink} alt="instagram" height="30px"/>
            </div>
            <div className='footer-icon-container'>
                <img src={facebookLink} alt="facebook" height="30px"/>
            </div>
            <div className='footer-icon-container'>
                <img src={twitterLink} alt="twitter" height="30px"/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer