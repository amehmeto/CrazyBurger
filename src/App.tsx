import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage'
import { OrderPage } from './pages/order/OrderPage'
import { ErrorPage } from './pages/ErrorPage'

export enum AppRoutes {
  HOME = '/',
  ORDER = '/order/',
  ERROR = '*',
}

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<LoginPage />} />
      <Route path={AppRoutes.ORDER + ':firstName'} element={<OrderPage />} />
      <Route path={AppRoutes.ERROR} element={<ErrorPage />} />
    </Routes>
  )
}

export default App
