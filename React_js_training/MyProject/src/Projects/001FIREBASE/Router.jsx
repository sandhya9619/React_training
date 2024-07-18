import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registrationpage from './Registrationpage'
import Loginpage from './Loginpage'
import Dashboard from './Dashboard'
import Guest from './Guest'
import Editpage from './Editpage'
import Newpost from './Newpost'
import Viewpost from './Viewpost'
import Allusers from './Allusers'
import Chatscreen from './Chatscreen'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registrationpage />}></Route>
          <Route path='/login' element={<Loginpage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/guest' element={<Guest />} ></Route>
          <Route path='/edit/:uid' element={<Editpage />}></Route>
          <Route path='/newpost' element={<Newpost />}></Route>
          <Route path='/viewpost' element={<Viewpost />}></Route>
          <Route path='/alluser' element={<Allusers/>}></Route>
          <Route path='/chatscreen/:uid' element={<Chatscreen/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
