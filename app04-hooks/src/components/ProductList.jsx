import React, {useState, useEffect, useCallback} from 'react'
import './ProductList.css'
import { useFetch } from '../hooks/useFerch';

function ProductList() {
    const [Url, setUrl] = useState("");
    const {data : Products} = useFetch(Url);
    
    // const [Products, setProsduct] = useState();
    // const fetchUrl = useCallback(() => {
    //     fetch(Url)
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //             setProsduct(data)
    //             setCount(data.length)
    //         })
    //     .catch((e)=>console.log("Failed"));
    // }, [Url])
    // useEffect(()=>{
    //     fetchUrl()
    //     console.log(55555)
    // }, [fetchUrl]);
  
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