import React, { useState, useEffect } from 'react';
import { auth } from '../auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../UserMenu/UserMenu-module.css';
import { Button, AppBar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
export const UserMenu = () => {
  const [email, setEmail] = useState(null);
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

  const logout = () => {
    auth.signOut();
  };

  return (
    <AppBar
      position="static"
      sx={{ display: 'flex', flexDirection: 'row', fontSize: '25px' }}
    >
      <PersonIcon sx={{ fontSize: 40, padding: 2 }} />
      {email && <p>{email}</p>}
      <Button sx={{ marginLeft: '70%' }} variant="contained" onClick={logout}>
        Log Out
      </Button>
    </AppBar>
  );
};
