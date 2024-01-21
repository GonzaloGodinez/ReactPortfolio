import { useState } from 'react'

import './App.css'
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
      {/* <h1>Profile</h1> */}
      
    </>
  )
}

export default App
