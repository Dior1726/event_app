import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='admin'
          element={<Admin />}
        />
      </Route>
      <Route
        exact
        path='/login'
        element={<AuthLayout />}
      >
        <Route
          index
          element={<Login />}
        />
      </Route>
    </Routes>
  )
}

export default App
