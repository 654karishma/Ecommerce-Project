import React from 'react'
import Productdetail from './productdetail'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
// import { IoMdCloseCircleOutline } from "react-icons/io";
import './product.css'
const Product = () => {
  return (
    <>
      <div className='product_detail'>
        <div className='conatiner'>
          {/* <button onClick={()=> close}><IoMdCloseCircleOutline /></button> */}
          {/* { */}
          {/* detail.map((curElm) => { */}
          {/* //     return (
          //       <div className='productbox'>
          //         <div className='img-box'>
          //           <img src={curElm.Img} alt={curElm.Title}></img>
          //         </div>
          //         <div className='detail'>
          //           <h4>{curElm.Title}</h4>
          //           <h2>{curElm.Title}</h2>
          //           <p>A screen everyone will love: whether your family is
          //           </p>
          //           <h3>{curElm.Price}</h3>
          //           <button>Add To Cart</button>
          //         </div>
          //       </div>
          //     )
          //   })
          // } */}
          <div className='productbox'>

          </div>
        </div>
      </div>
      <div className='products'>
        <h2> # Products</h2>
        <p>Home . products</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>categories</h3>
              <ul>
                <li>Power supply</li>
                <li>Passive components</li>
                <li>Development modes & kits</li>
                <li>Sensors</li>
                <li>OptoElectronics</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {
                Productdetail.map((curElm) => {
                  return (
                    <>

                      <div className='box' key={curElm.id}>
                        <div className='img_box'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                          <div className='icon'>
                            <li>  <PiShoppingCartBold /></li>
                            <li><FaRegEye /></li>
                            {/* onClick={() => view(curElm)} */}
                            <li><FiHeart /></li>
                          </div>
                        </div>

                        <div className='detail'>
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <h4>{curElm.Price}</h4>
                        </div>
                      </div>

                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Product