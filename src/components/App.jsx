import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'Redux/store';
import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import Loginpage from '../Pages/LoginPage';
import ContactsPage from '../Pages/ContactsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import PrivateRoutes from './Routes/PrivateRoutes';
import homepag from '../Images/homepag.jpg';
export const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${homepag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Loginpage />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};
