import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin02page from './Admin02page'
import Userpage from './Userpage'
import Loginpage from './Loginpage'
import Dashbordpage from './Dashbordpage'
import MyPost from './MyPost'
import NEWPOST from './NEWPOST'
import Admindash from './Admindash'
import Addpost from './Addpost'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin02page />}></Route>
          <Route path='/user' element={<Userpage />}></Route>
          <Route path='/dashboard' element={<Dashbordpage />}></Route>
          <Route path='/login' element={<Loginpage />}></Route>
          <Route path='/mypost' element={<MyPost />}></Route>
          <Route path='/newpost' element={<NEWPOST />}></Route>
          <Route path='/admindash' element={<Admindash />}></Route>
          <Route path='/addpost' element={<Addpost/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
