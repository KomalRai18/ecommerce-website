import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src="social.png" alt="logo" height='50px'/>
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
                <img src="instagram.png" alt="instagram" height="30px"/>
            </div>
            <div className='footer-icon-container'>
                <img src="facebook.png" alt="facebook" height="30px"/>
            </div>
            <div className='footer-icon-container'>
                <img src="twitter.png" alt="twitter" height="30px"/>
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