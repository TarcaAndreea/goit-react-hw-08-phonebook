import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        gap: '60px',
        justifyContent: 'flex-end',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Typography
          onClick={handleRegisterClick}
          sx={{
            minWidth: 200,

            height: '50px',
            fontSize: '30px',
            color: 'black',
            textAlign: 'center',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        >
          Register
        </Typography>
        <Typography
          onClick={handleLoginClick}
          sx={{
            minWidth: 200,
            fontSize: '30px',
            height: '50px',

            color: 'black',
            textAlign: 'center',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        >
          Log In
        </Typography>
      </Box>
    </Container>
  );
}
