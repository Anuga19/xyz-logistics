import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const formFields = {
  signUp: {
    username: { label: 'Username', placeholder: 'Enter username', isRequired: true },
    password: { label: 'Password', placeholder: 'Enter password', isRequired: true },
    confirm_password: { label: 'Confirm Password', placeholder: 'Confirm password', isRequired: true },
    name: { label: 'Full Name', placeholder: 'Enter full name', isRequired: true },
    email: { label: 'Email', placeholder: 'Enter email', isRequired: true },
  },
};

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500">
<Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
  );
};

export default AuthPage;
