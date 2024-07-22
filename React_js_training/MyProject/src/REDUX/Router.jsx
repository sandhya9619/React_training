import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './app/Store'
import Home from './Home'

export default function Router() {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
