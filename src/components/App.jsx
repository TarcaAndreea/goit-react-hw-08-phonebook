import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'Redux/store';
import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import Loginpage from '../Pages/LoginPage';
import ContactsPage from '../Pages/ContactsPage';
import NotFoundPage from '../Pages/NotFoundPage';

export const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {' '}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};
