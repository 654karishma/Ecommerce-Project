import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { FiTruck, FiHeart } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlinePercentage } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegEye, FaRupeeSign } from "react-icons/fa";
import Ardunio from '../assests/arduino2.0.png';
import Homeproduct from './homeproduct.js';
import Led from '../assests/motors.png';
import Electronic from '../assests/STEM.jpg';
import './home.css'
const Home = () => {

    return (
        <>
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>THE BEST DEALS AND OFFERS ARE WAITING FOR YOU</h2>

                        <Link to='/product' className='link'>Shop Now <span className='Arrow'><BsArrowRight /></span></Link>

                    </div>
                    <div className='img_box'>
                        <img src={Electronic} alt='img' width='150%' height='100%' align='right'></img>
                    </div>

                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={Led} alt=''></img>
                        </div>
                        <div className='detail'>
                            <p>23 product</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='detail'>
                            <p>23 product</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='detail'>
                            <p>23 product</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='detail'>
                            <p>23 product</p>
                        </div>
                    </div>


                </div>
            </div >
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FiTruck />
                        </div>

                        <div className='detail'>
                            <h3>Free Shipping</h3>
                            <p>order above RS1000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <LiaRupeeSignSolid />
                        </div>

                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money Back gaurrenty</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon'>
                            <AiOutlinePercentage />
                        </div>

                        <div className='detail'>
                            <h3>Member Discount</h3>
                            <p>On every Order</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BiHeadphone />
                        </div>

                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>Every Time call support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Top Products</h2>
                <div className='container'>
                    {
                        Homeproduct.map((curElm) => {
                            return (
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            <li>  <PiShoppingCartBold /></li>
                                            <li><FaRegEye /></li>
                                            <li><FiHeart /></li>
                                        </div>
                                    </div>

                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>{curElm.Price}</h4>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>BEST DEALS %</h4>
                        <h3>Arduino UNO R3 Original | Genuine Arduino UNO Board with DIP ATmega328P</h3>
                        <p>Save upto <FaRupeeSign /> 500 </p>
                        <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className='img_box'>
                        <img src={Ardunio} alt='arduino'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home