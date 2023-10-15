import React from 'react'
import Introduction from './introduction'
import Header from './Header'
import Container from './Container'
import Content from './Content'
import Products from './Products'
import Footer from './Footer'
import Robot from '../Robot/Robot'

function Home() {
  return (
    <div>
      <Introduction/>
      <Container/>
      <Content/>
      <Products/>
    </div>
  )
}

export default Home
