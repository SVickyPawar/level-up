import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Welcome back Vivek</h3>
      <Login />
    </div>
  )
}

export default App
