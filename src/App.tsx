import React ,{ useState } from 'react'
import './App.css'
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';
import { BrowserRouter,Routes,Route } from "react-router";
function App() {

  return (
    <BrowserRouter> 
     <Routes>
       <Route index element={<Home/>}/>
       <Route path="Order" element={<Order/>}/>
       <Route path="Cart" element={<Cart/>}/>
       <Route path="product-detail" element={<ProductDetail/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App
