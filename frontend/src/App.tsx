import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { OrderPage } from './pages/OrderPage'
import { ErrorPage } from './pages/ErrorPage'

export enum AppRoutes {
  HOME = '/',
  ORDER = '/order/',
  ERROR = '*',
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoutes.HOME} element={<LoginPage />} />
        <Route path={AppRoutes.ORDER + ':firstName'} element={<OrderPage />} />
        <Route path={AppRoutes.ERROR} element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
