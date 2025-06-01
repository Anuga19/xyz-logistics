
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ClientDashboard from './views/ClientDashboard';
import AdminDashboard from './views/AdminDashboard';

const formFields = {
  signUp: {
    username: {
      label: 'Username',
      placeholder: 'Enter a username',
      isRequired: true,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
      isRequired: true,
    },
    confirm_password: {
      label: 'Confirm Password',
      placeholder: 'Please confirm your password',
      isRequired: true,
    },
    name: {
      label: 'Full Name',
      placeholder: 'Enter your full name',
      isRequired: true,
    },
    email: {
      label: 'Email',
      placeholder: 'Enter your email address',
      isRequired: true,
    },
  },
};

const AppRoutes = ({ signOut, user }) => {
  const role = user?.attributes?.['custom:role'];


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500 text-gray-900">
      <Routes>
        <Route
          path="/"
          element={
            role === 'admin' ? (
              <Navigate to="/admin" replace />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />
        <Route
          path="/dashboard"
          element={<ClientDashboard user={user} signOut={signOut} />}
        />
        {/* {role === 'admin' && } */}
        <Route
          path="/admin"
          element={<AdminDashboard user={user} signOut={signOut} />}
        />
      </Routes>
    </div>
  );
};

export default withAuthenticator(AppRoutes, { formFields });
