import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRedux from './ScoreComponent01'
import { Provider } from 'react-redux'
import { Store } from './app/Store'
import ReduxComponent1 from './CounterComponent01'
import TodoComponent from './TodoComponent'
import Personal_finance_managerComponent from './FinanceManagementComponent'
import CounterComponent01 from './CounterComponent01'
import ScoreComponent01 from './ScoreComponent01'

export default function Router() {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Personal_finance_managerComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
