import React from 'react'
import './nav.css'

import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../assests/Etech.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className='free'>
                <div className='icon'><FaTruck /></div>
                <p>Festive Offers %  & FREE Shipping when shopping upto Rs 5000</p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' width='100px' height='50px'></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='Search Your Product...' autoComplete='off'></input>
                        <button>Search</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated && (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <AiOutlineUser /></div>
                                    <p>Hello,{user.name}</p>
                                </div>)
                        }


                        <div className='second_icon'>
                            <Link to="/" className='link'> <AiOutlineHeart /> </Link>
                            <Link to="/cart" className='link'> <BsFillBagCheckFill /> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                            :
                            <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
