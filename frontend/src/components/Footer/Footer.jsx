import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Feel free to tailor this text to fit your specific context or add any additional information relevant to your website or business.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100078400862056"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100021923166476"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.facebook.com/nguyentienhoa.2004"><img src={assets.linkedin_icon} alt="" /></a>
                    
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul className='footer-links'>
                    <li><a href="./">Home</a></li>
                    <li><a href="#">Delivery</a></li>                
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+0123-456-789</li>
                    <li>Contact@gmail.com   </li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>© 2024 Acme Corporation. All rights reserved.</p>
    </div>
  )
}

export default Footer