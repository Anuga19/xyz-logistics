import React from 'react';
import '../index.css'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles/reset.layer.css' 
import '@aws-amplify/ui-react/styles/base.layer.css' 
import '@aws-amplify/ui-react/styles/button.layer.css' 
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default function ClientAuth() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-6">Client Portal</h2>

        {/* <Authenticator
          initialState="signIn"
          hideSignUp={false}
          onStateChange={(state) => {
            if (state === 'signedin') navigate('/dashboard');
          }}
          components={{
            Header: () => null,
            Footer: () => null,

            SignIn: ({ signIn }) => (
              <form onSubmit={signIn.handleSubmit} className="space-y-4">
                <input
                  name="username"
                  placeholder="Username"
                  onChange={signIn.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={signIn.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Sign In
                </button>
                <p className="text-sm text-center mt-2 text-purple-600 hover:underline cursor-pointer">
                  Forgot your password?
                </p>
              </form>
            ),

            SignUp: ({ signUp }) => (
              <form onSubmit={signUp.handleSubmit} className="space-y-4">
                <input
                  name="username"
                  placeholder="Username"
                  onChange={signUp.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={signUp.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={signUp.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={signUp.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={signUp.updateForm}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Create Account
                </button>
              </form>
            ),
          }}
        /> */}
      </div>
    </div>
  );
}
