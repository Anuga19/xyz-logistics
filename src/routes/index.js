import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientAuth from './ClientAuth';
import AdminAuth from './AdminAuth';
import ClientDashboard from '../views/ClientDashboard';
import AdminDashboard from '../views/AdminDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/client" element={<ClientAuth />} />
      <Route path="/admin" element={<AdminAuth />} />
      <Route path="/dashboard" element={<ClientDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
