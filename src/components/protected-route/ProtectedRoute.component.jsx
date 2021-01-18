import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component, path, ...otherProps }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <Route path={path} component={component} {...otherProps} />
  ) : (
    <Redirect to="/auth" />
  );
};

export default ProtectedRoute;
