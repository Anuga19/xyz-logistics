import React from 'react';

export default function AdminDashboard({ signOut, user }) {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8 text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">
          Admin Panel: {user?.username}
        </h1>
        <p className="text-gray-600 mb-6">You're logged in as an admin.</p>
        <button
          onClick={signOut}
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
