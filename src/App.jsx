import React from 'react'
import Landing from './components/Landing'
import { Menu } from './components/Menu'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
    
    
      <Nav />
      <Outlet/>
    </div>
  )
}

export default App