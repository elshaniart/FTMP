import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "@/hooks/useUser";

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  const { user, loading } = useUser(); // Ensure useUser() provides a loading state
  const location = useLocation();

  // Show a loading indicator until we confirm auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is null (logged out) and we're not on the login page, redirect to login
  if (!user && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  // If user exists and is NOT on dashboard, redirect them to dashboard
  if (user && location.pathname !== "/dashboard") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}

export default Wrapper;
