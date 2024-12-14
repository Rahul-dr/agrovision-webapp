import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Make sure the path to AuthContext is correct

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect to the login page, saving the location they were trying to go to
        return <Navigate to="/" replace />;
    }

    // Render children routes if authenticated
    return <Outlet />;
};

export default ProtectedRoute;
