import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../Redux/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchContacts } from 'Redux/Operation';
export default function PrivateRoutes() {
  const isAuth = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [isAuth, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
