import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './output.css'
import Navbar from './component/Navbar'
import Her from './component/Her'
import About from './component/about'
import Service from './component/Service'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'


//import index from './index.css'
//import output from './output.css'

function App() {
  return (
    <>
      <Navbar />
      <Her />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
