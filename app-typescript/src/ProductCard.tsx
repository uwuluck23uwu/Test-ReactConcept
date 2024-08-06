import React from 'react';
import { Product } from './Product';

interface Props{
    product : Product
}

export default function ProductCard(props : Props) {
    const { id, productName, price, state } = props.product;
  return (
    <div>
        <p>{id}</p>
        <p>{productName}</p>
        <p>{price.toFixed(2)}</p>
        <p>{state ? "Available" : "Not Available"}</p>
    </div>
  );
}

// const ProductCard: React.FC<Product> = (product) => {
//   return (
//     <div>
//         <p>{product.product.id}</p>
//     </div>
//   );
// }