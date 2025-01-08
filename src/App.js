import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AppMenu from './components/Menu'
import { ToastContainer } from 'react-toastify'
import React from 'react'
import CreateDebt from './pages/CreateDebt'
import CreateAccount from './pages/CreateAccount'
import { getItem } from './utils/persistenceUtils'
import { TOKEN_KEY } from './utils/constants'
import Logout from './pages/Logout'

const PrivateRoute = () => {
  const token = getItem(TOKEN_KEY) // Buscando token salvo
  return token ? <Outlet /> : <Navigate to="/login" />
}
function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CreateAccount />} />
        <Route path="/logout" element={<Logout />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Login />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cadastar-conta" element={<CreateDebt />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
