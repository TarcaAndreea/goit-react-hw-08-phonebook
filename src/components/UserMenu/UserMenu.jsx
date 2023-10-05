import React, { useState, useEffect } from 'react';
import { auth } from '../auth/firebase';

import '../UserMenu/UserMenu-module.css';
import { Button, AppBar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const UserMenu = () => {
  const [email, setEmail] = useState(null);

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
      <Button variant="contained" onClick={logout}>
        Log Out
      </Button>
    </AppBar>
  );
};
