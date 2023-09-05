import React from 'react'
import './app.css'
import Navbar from './Compents/Navbar/Navbar'
import Home from './Compents/Home/Home'
import Main from './Compents/Main/Main'
import Footer from './Compents/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main/>
      <Footer/>
    </>
  );
}

export default App