import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from '../Images/background.jpg';
export default function HomePage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        gap: '160px',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Box>
        <Typography
          variant="h1"
          component="h2"
          sx={{ margin: 'auto', paddingTop: '160px' }}
        >
          Welcome!
        </Typography>{' '}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          onClick={handleRegisterClick}
          sx={{
            minWidth: 200,
            boxShadow:
              ' rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
          }}
        >
          Register
        </Typography>
        <Typography
          onClick={handleLoginClick}
          sx={{
            minWidth: 200,
            boxShadow:
              ' rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
          }}
        >
          Login
        </Typography>
      </Box>
    </Container>
  );
}
