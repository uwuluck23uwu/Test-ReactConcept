import React from 'react'
import { Product } from './Product'
import ProductCard from './ProductCard';

var products : Product[] = [];
for (var i = 1; i <= 10; i++){
    products.push({
        id: i,
        productName: "Sumo" + i,
        price: Math.random()*99+1,
        state: Math.random()*99+1 > 50 ? true : false,
    });
}

export default function ProductList() {
  return (
    <div>
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
