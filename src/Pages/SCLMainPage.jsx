import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import ProductPortfolio from '../Components/ProductPortfolio'
import Experience from '../Components/Experience'
import TheTeam from '../Components/TheTeam'
import { Outlet } from 'react-router'

export default function SCLMainPage() {
  return (
    <div className=''>
        <Navigation />
        <div className='mb-20'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
