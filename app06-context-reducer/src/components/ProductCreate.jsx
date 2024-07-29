import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import './ProductCreate.css'
import { useCart } from "../context/CartContext";

export default function ProductCreate() {
  const { addProduct } = useCart();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.random(), // หรือใช้วิธีการสร้าง ID ที่เหมาะสมกว่านี้
      name: name,
      image: "assets/default.png", // หรือให้ผู้ใช้เลือกภาพ
      price: Number(price),
      quantity: 1,
    };
    addProduct(newProduct);
  };

  return (
    <main>
      <Sheet
        sx={{
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Create Product</b>
          </Typography>
          <Typography level="body-sm">
            You can create products from this page.
          </Typography>
        </div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            name="price"
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>image</FormLabel>
          <Input
            name="image"
            type="image"
            placeholder="image"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
        <Button className="button" sx={{ mt: 1 }} onClick={handleAddProduct}>
          Add Product
        </Button>
      </Sheet>
    </main>
  );
}
