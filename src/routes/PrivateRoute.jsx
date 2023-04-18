import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center my-4">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  if (user) return children;
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
