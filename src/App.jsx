import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPage'
import SCLMainPage from './Pages/SCLMainPage'
import ProductsAll from './Components/ProductsAll'
import MainPageContent from './Components/MainPageContent'
import ExperienceAll from './Components/ExperienceAll'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/SCL" element={<SCLMainPage />}>
          <Route path='/SCL' element={<MainPageContent />}/>
          <Route path='/SCL/Products' element={<ProductsAll />}/>
          <Route path='/SCL/Experience' element={<ExperienceAll />}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
