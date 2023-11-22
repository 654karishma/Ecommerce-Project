import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from '../assests/Etech.png'
import './footer.css'
const footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' width='100px' height='50px'></img>
                    </div>
                    <div className='detail'>
                        <p>We are a team of designers and developers that create high quality</p>
                        <div className='icon'>
                            <li><FaFacebook /></li>
                            <li><FaInstagram /></li>
                            <li><FaTwitter /></li>
                            <li><FaYoutube /> </li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>My Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer