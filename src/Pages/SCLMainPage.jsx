import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'

export default function SCLMainPage() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navigation />
        <div className='flex-1 bg-slate-600'>
            
        </div>
        <Footer />
    </div>
  )
}
