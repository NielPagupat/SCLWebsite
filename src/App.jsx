import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPage'
import SCLMainPage from './Pages/SCLMainPage'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/SCL" element={<SCLMainPage />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
