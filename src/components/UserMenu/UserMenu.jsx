import React, { useState, useEffect } from 'react';
import { auth } from '../auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
    <div>
      {email && <p>{email}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};
