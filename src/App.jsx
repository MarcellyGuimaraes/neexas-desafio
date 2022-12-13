import Content from './components/Content'
import Header from './components/Header'
import Navbar from './components/Navbar'
import React from 'react'
import Logo from './components/Logo'

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-12 auto-rows-max">
      <Logo />
      <Header />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
