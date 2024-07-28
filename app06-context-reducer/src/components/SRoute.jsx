import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductCreate, NotFound, Cart } from './index'; // Named import

const SRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="ProductCreate" element={<ProductCreate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default SRoute;
