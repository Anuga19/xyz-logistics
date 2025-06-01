import React from 'react';
import './index.css'; // Tailwind CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

import AppRoutes from './Routes'; // Your existing routes (client/admin dashboards)

import AuthPage from './routes/AuthPage';


Amplify.configure(awsConfig);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <BrowserRouter>
        <Routes>
          {/* Public Sign In/Sign Up Page */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Routes (your existing AppRoutes) */}
          <Route
            path="/*"
            element={<AppRoutes />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
