import React, { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import Previews from "./Previews";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)({
  backgroundColor: "rgb(226, 7, 7)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgb(200, 0, 0)",
  },
});
const CustomLink = styled(Link)({
  color: "white",
  textDecoration: "none",
});

export default function ProductCreate() {
  const { addProduct } = useCart();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState([]);
  const [errors, setErrors] = useState({});

  const handleAddProduct = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = "Name is required";
    if (!price) validationErrors.price = "Price is required";
    if (!quantity) validationErrors.quantity = "Quantity is required";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      id: Math.random(),
      name: name,
      image:
        image.length > 0 ? URL.createObjectURL(image[0]) : "assets/Cat20.png",
      price: price,
      quantity: quantity,
    };
    addProduct(newProduct);
    setName("");
    setPrice("");
    setQuantity("");
    setImage([]);
    setErrors({});
    toast.success("Product added successfully!");
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
            required
          />
          {errors.name && <Typography color="error">{errors.name}</Typography>}
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            name="price"
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          {errors.price && (
            <Typography color="error">{errors.price}</Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <Input
            name="quantity"
            type="number"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          {errors.quantity && (
            <Typography color="error">{errors.quantity}</Typography>
          )}
        </FormControl>
        <Previews onFilesChange={setImage} />
        <CustomButton sx={{ mt: 1 }} onClick={handleAddProduct}>
          Add Product
        </CustomButton>
        <CustomButton>
          <CustomLink to="/">Cancel</CustomLink>
        </CustomButton>
      </Sheet>
    </main>
  );
}
