import React from 'react'
import Header from "../views/home/Header"
import Footer from "../views/home/Footer"
import { Outlet } from 'react-router-dom'
import Robot from '../views/Robot/Robot'
import Menu from '../views/Menu/Menu'
function General() {
  return (
    <div className='Generale'>
     <Header/>
     <div className='fakeHeader'></div>
     <Outlet/>
     <Robot/>
     <Footer/>
    </div>
  )
}

export default General
