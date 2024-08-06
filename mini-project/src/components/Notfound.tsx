import { Container, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container component="main" maxWidth="xs" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" component="h1" color="error">
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Sorry, the page you are looking for does not exist. You can always go back to the homepage.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" component={NavLink} to="/"
          sx={{ 
            bgcolor: '#B4B4B8', 
            color: 'white', 
            '&:hover': 
              { bgcolor: '#9D9DA0' }
          }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}
