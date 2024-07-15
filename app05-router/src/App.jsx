import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Footer, Header, ProductList, ProductDetail, Contact } from './components/'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/999" element={<ProductDetail/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App