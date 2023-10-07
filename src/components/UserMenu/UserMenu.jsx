import React, { useState, useEffect } from 'react';
import { auth } from '../auth/firebase';
import { useDispatch } from 'react-redux';
import '../UserMenu/UserMenu-module.css';
import { Button, AppBar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from 'Redux/Operation';
import { useNavigate } from 'react-router-dom';
export const UserMenu = () => {
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: '25px',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <PersonIcon sx={{ fontSize: 40, padding: 2 }} />
        {email && <p>{email}</p>}
      </Box>
      <Button variant="contained" onClick={handleLogout}>
        Log Out
      </Button>
    </AppBar>
  );
};
