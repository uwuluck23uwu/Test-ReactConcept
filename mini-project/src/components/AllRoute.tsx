import { Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  ProductList,
  ProductDetail,
  ProductCreate,
  Cart,
} from "./index";

export default function AllRoute() {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/create-product" element={<ProductCreate />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
