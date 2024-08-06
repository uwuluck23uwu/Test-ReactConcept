// Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { fetchProducts } from '../components/api/productsSlice';
import { addToCart } from '../components/api/cartSlice';
import { Container, Grid, Typography, Link, Breadcrumbs, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';

const categories = [
  { name: 'เสื้อยืด', href: 'เสื้อยืด' },
  { name: 'เสื้อโปโล', href: 'เสื้อโปโล' },
  { name: 'เสื้อแขนยาว', href: 'เสื้อแขนยาว' },
];

const CategoryLink = styled(Link)({
  display: 'block',
  margin: '8px 0',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          หน้าหลักของ SUDA
        </Link>
        <Link underline="hover" color="inherit" href="/">
          MEN
        </Link>
        <Typography color="text.primary">เสื้อทั้งหมด</Typography>
      </Breadcrumbs>

      <Typography variant="h4" gutterBottom>
        ผลลัพธ์
      </Typography>
      <Typography variant="body1" gutterBottom>
        {products.length} รายการ
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            MEN
          </Typography>
          {categories.map((category) => (
            <CategoryLink key={category.name} href={category.href}>
              {category.name}
            </CategoryLink>
          ))}
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={4}>
            {productStatus === 'loading' && <Typography>Loading...</Typography>}
            {productStatus === 'failed' && <Typography>Error: {error}</Typography>}
            {productStatus === 'succeeded' && products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      UNISEX {product.size}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      THB {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.promotion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary" onClick={() => handleAddToCart(product)}>
                      เพิ่มลงตะกร้า
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
