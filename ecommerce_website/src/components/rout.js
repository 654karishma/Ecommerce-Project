import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
const rout = ({ product, setProduct, detail }) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} />} />
            </Routes>
        </>
    )
}

export default rout