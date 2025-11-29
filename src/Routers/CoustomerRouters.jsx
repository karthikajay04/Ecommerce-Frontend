import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../customer/pages/Homepage/Homepage'
import { Cart } from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import Navigation from '../customer/components/Navigation/Navigation.jsx';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Checkout from '../customer/components/Checkout/Checkout.jsx'
import { Order } from '../customer/components/Order/Order.jsx'
import { OrderDetails } from '../customer/components/Order/OrderDetails.jsx'

export const CoustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation></Navigation>
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            

            
        
        
        
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        </Routes>
        <div>
      <Footer></Footer>

        </div>
    </div>

  )
}
