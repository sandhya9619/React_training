import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDisplay from './ProductDisplay'
import ProductDetail from './ProductDetail'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductDisplay/>}></Route>
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
