import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProductThunk,
} from "./api/productsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteProductThunk(id));
  };

  const handleEdit = (product) => {
    navigate('/create-product', { state: { product } });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Promotion</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "200px", height: "200px" }}
                />
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.size}</TableCell>
              <TableCell>{product.promotion}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleEdit(product)}
                >
                  EDIT
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(product.id)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
