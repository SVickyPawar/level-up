import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/homepage/HomePage'
import Dashboard from './pages/dashboard/Dashboard'
import Careers from './pages/careers/Careers'
import About from './pages/about/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import RequireAuth from './hoc/RequireAuth'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} />
        <Route path='/careers' element={<RequireAuth><Careers/></RequireAuth>} />
        <Route path='/about-us' element={<RequireAuth><About/></RequireAuth>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
