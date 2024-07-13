import React, { useState } from 'react'
import './ProductList.css'
import { useFetch } from '../hooks/useFerch';
import BounceLoader  from "react-spinners/BounceLoader";

function ProductList() {
    const [Url, setUrl] = useState("");
    const {data : Products, Loading} = useFetch(Url);

    if (Loading) return <BounceLoader color="green"/>
  
    return (
        <div className="product-list">
            <h1 className="product-list-title">Product List</h1>
            <div className="product-row">
                <h2>{Products && Products.length}</h2>
                <button onClick={()=>setUrl("http://localhost:3000/products/")}>Load All</button>
                <button onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>Load In Stock</button>
            </div>
            {Products && Products.map((item)=>(
                <div key={item.id} className="product-card">
                    <div className="product-id">{item.id}</div>
                    <div className="product-name">{item.name.length < 30 ? item.name : item.name.slice(0,30)+"..."}</div>
                    <div className="product-row">
                        <div className="product-price">${item.price}</div>
                        <button className="product-stock">{item.in_stock == "true" ? "In Stock" : "Unavailable"}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList