import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from "../views/Administrator/Menu/Menu"
import Header from '../views/Administrator/Header/Header'
function Admin() {
  return (
    <div className='Admin'>
      <Menu/>
      <div className='container'>
      <Header/>
      <Outlet/>
      </div>
    </div>
  )
}

export default Admin
