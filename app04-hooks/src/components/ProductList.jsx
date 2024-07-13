import React, {useState, useEffect} from 'react'
import './ProductList.css'

function ProductList() {
    const [Products, setProsduct] = useState();

    useEffect(()=>{
      fetch('http://localhost:3000/products/')
      .then((response)=>response.json())
      .then((data)=>setProsduct(data))
      .catch((e)=>console.log("Failed"));
    },[]);
  
    return (
      <div className="product-list">
        <h1 className="product-list-title">Product List</h1>
        {Products && Products.map((item)=>(
            <div className="product-card">
                <div className="product-id">{item.id}</div>
                <div className="product-name">{item.name.length < 30 ? item.name : item.name.slice(0,30)+"..."}</div>
                <div className="product-row">
                    <div className="product-price">${item.price}</div>
                    <button className="product-stock">{item.in_stock ? "In Stock" : "Unavailable"}</button>
                </div>
            </div>
        ))}
      </div>
    )
}

export default ProductList