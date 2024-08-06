import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { createProduct, updateProduct } from "./api/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "./image/Logo.png";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../components/api/productsSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  size: Yup.string().required("Size is required"),
  promotion: Yup.string().required("Promotion is required"),
});

export default function ProductCreate() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [image, setImage] = useState(logo);
  const [initialValues, setInitialValues] = useState({
    name: "",
    price: "",
    size: "",
    promotion: "",
  });

  useEffect(() => {
    if (location.state && location.state.product) {
      const { product } = location.state;
      setImage(product.image);
      setInitialValues({
        name: product.name,
        price: product.price.toString(),
        size: product.size,
        promotion: product.promotion,
      });
    }
  }, [location.state]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSave = async (values, { setSubmitting }) => {
    const newProduct = {
      image,
      name: values.name,
      price: parseFloat(values.price),
      size: values.size,
      promotion: values.promotion,
    };

    try {
      if (location.state && location.state.product) {
        newProduct.id = location.state.product.id;
        await updateProduct(newProduct);
        alert("Product updated successfully!");
      } else {
        await createProduct(newProduct);
        alert("Product created successfully!");
        dispatch(fetchProducts());
      }
    } catch (error) {
      console.error("There was an error creating/updating the product!", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 1000, boxShadow: 4 }}>
        <Grid container spacing={2} sx={{ paddingLeft: 2, paddingTop: 2 }}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <input {...getInputProps()} />
              <CardMedia component="img" height="320" image={image} />
            </div>
            <Button
              {...getRootProps()}
              variant="contained"
              sx={{
                marginTop: "auto",
                marginBottom: 3,
                bgcolor: "#B4B4B8",
                color: "white",
                "&:hover": { bgcolor: "#9D9DA0" },
              }}
            >
              ADD IMAGE
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div">
                {location.state && location.state.product ? "EDIT PRODUCT" : "CREATE PRODUCT"}
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSave}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div>
                      <Field
                        name="name"
                        as={TextField}
                        label="Name"
                        fullWidth
                        sx={{ mt: 2 }}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div>
                      <Field
                        name="price"
                        as={TextField}
                        label="Price"
                        type="number"
                        fullWidth
                        sx={{ mt: 2 }}
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div>
                      <Field
                        name="promotion"
                        as={TextField}
                        label="Promotion"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mt: 2 }}
                      />
                      <ErrorMessage
                        name="promotion"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div>
                      <Field
                        name="size"
                        as={TextField}
                        label="Size"
                        fullWidth
                        sx={{ mt: 2 }}
                      />
                      <ErrorMessage
                        name="size"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#B4B4B8",
                          color: "white",
                          "&:hover": { bgcolor: "#9D9DA0" },
                        }}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        component={NavLink}
                        to="/"
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
