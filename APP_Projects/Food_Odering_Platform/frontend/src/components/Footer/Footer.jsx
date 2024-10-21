import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">


                {/* LEFT FOOTER*/}
                <div className="footer-content-left">
                    {/*<img src={assets.logo} alt="" />*/}
                    <p>Enjoy a diverse menu of local and international cuisine with our food delivery service. Order your favorite dishes from top restaurants and have them delivered to your door quickly and conveniently.</p>
                      {/*FOOTER ICON*/}
                      <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                      </div>

                </div>

                {/*CENTER    FOOTER*/}
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivary</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                {/* RIGHTN FOOTER*/}
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+254-743=861-565</li>
                        <li>joellembithi@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; JoeCraftFood.com.All Right Reserved.</p>
        </div>
    )
}

export default Footer
