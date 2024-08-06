import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductCreate, NotFound, Cart } from "./index";

const SRoute = ({ drawerOpen }) => {
  return (
    <div
      style={{
        marginLeft: drawerOpen ? 250 : 0,
        transition: "margin 0.3s",
      }}
    >
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="ProductCreate" element={<ProductCreate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default SRoute;
