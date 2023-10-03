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
          sx={{
            margin: 'auto',
            paddingTop: '160px',
            color: 'gray',
            paddingLeft: '50px',
          }}
        >
          Welcome!
        </Typography>{' '}
      </Box>
      <Box
        sx={{
          display: 'flex',

          gap: '30px',
        }}
      >
        <Typography
          onClick={handleRegisterClick}
          sx={{
            minWidth: 200,
            padding: '20px',
            height: '50px',
            fontSize: '40px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Register
        </Typography>
        <Typography
          onClick={handleLoginClick}
          sx={{
            minWidth: 200,
            fontSize: '40px',
            height: '50px',
            padding: '20px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Log In
        </Typography>
      </Box>
    </Container>
  );
}
