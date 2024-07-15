import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Footer, ProductList, ProductDetail, Contact, Notfound, ContactIn, ContactEu, ContactUs } from './components/'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetail/>}/>
            <Route path="contact" element={<Contact />}>
                <Route path="in" element={<ContactIn />} />
                <Route path="eu" element={<ContactEu />} />
                <Route path="us" element={<ContactUs />} />
            </Route>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute