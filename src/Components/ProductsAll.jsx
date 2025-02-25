import { Search } from 'lucide-react'
import React from 'react'
import { allProducts } from '../assets/Products/products'
import { Outlet } from 'react-router'

export default function ProductsAll() {
    const items = allProducts
  return (
    <div>
        <Outlet />
    </div>
    
  )
}
