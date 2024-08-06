import {
  Container,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Divider,
  Box,
  Link,
  Breadcrumbs,
} from '@mui/material';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCartThunk } from '../components/api/cartSlice';

const CartSummary = styled(Box)({
  padding: '16px',
  backgroundColor: '#f8f8f8',
  borderRadius: '8px',
});

const CartItem = styled(Box)({
  marginBottom: '16px',
});

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCartThunk(id));
  };

  return (
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          SUDA
        </Link>
        <Typography color="text.primary">ตะกร้า</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        ตะกร้า
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">ไม่มีสินค้าในตะกร้า</Typography>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <CardMedia component="img" height="280" image={item.image} />
              </Grid>
              <Grid item xs={12} sm={9}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ขนาด: {item.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.promotion}
                  </Typography>
                  <Typography variant="h6" color="error">
                    THB {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    จำนวน: {item.quantity}
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    ลบ
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
          </CartItem>
        ))
      )}

      {cartItems.length > 0 && (
        <CartSummary>
          <Typography variant='h6'>สรุปคำสั่งซื้อ</Typography>
          <Typography variant='body2'>รวมมูลค่าสินค้า: THB {totalAmount}</Typography>
          <Typography variant='h6'>ยอดรวม: THB {totalAmount}</Typography>
          <Button
            variant='contained'
            fullWidth
            sx={{
              bgcolor: '#B4B4B8',
              color: 'white',
              '&:hover': { bgcolor: '#9D9DA0' },
            }}
          >
            ชำระเงิน
          </Button>
        </CartSummary>
      )}
    </Container>
  );
}
