import { useState } from 'react'

import './App.css'
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Naveg from './components/UI/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Naveg />
      <Outlet />
      {/* <h1>Profile</h1> */}
      
    </>
  )
}

export default App
