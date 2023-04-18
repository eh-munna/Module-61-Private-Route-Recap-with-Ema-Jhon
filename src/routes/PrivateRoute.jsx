import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center my-4">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
