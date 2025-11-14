import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from '../../../context/UserContext.jsx';

export default function ProtectedRoute({ children }) {
  const { userLogin, loading } = useContext(UserContext);

  if (loading) return null;
  if (!userLogin) return <Navigate to="/login" replace />;

  return children;
}