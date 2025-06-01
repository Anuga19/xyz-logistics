// import React from 'react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import { useNavigate } from 'react-router-dom';
// import { Amplify } from 'aws-amplify';
// import awsExports from '../aws-exports';

// Amplify.configure(awsExports);

// const formFields = {
//   signUp: {
//     username: {
//       label: 'Admin Username',
//       placeholder: 'Enter admin username',
//       isRequired: true,
//     },
//     password: {
//       label: 'Password',
//       placeholder: 'Enter your password',
//       isRequired: true,
//     },
//     confirm_password: {
//       label: 'Confirm Password',
//       placeholder: 'Please confirm your password',
//       isRequired: true,
//     },
//     name: {
//       label: 'Full Name',
//       placeholder: 'Enter your name',
//       isRequired: true,
//     },
//     email: {
//       label: 'Email',
//       placeholder: 'Enter your email address',
//       isRequired: true,
//     },
//   }
// };

// function AdminAuth({ signOut, user }) {
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     if (user) navigate('/admin-dashboard');
//   }, [user, navigate]);

//   return null;
// }

// //export default withAuthenticator(AdminAuth, { formFields });

// export default withAuthenticator(AdminAuth, {
//   formFields,
//   hideSignUp: true, // 👈 disables sign-up form
// });


// src/AdminAuth.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default function AdminAuth() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-center text-2xl font-bold text-purple-800 mb-6">Admin Login</h2>
        {/* <Authenticator
          hideSignUp={true}
          initialState="signIn"
          className="w-full"
          onStateChange={(state, data) => {
            if (state === 'signedin') navigate('/admin-dashboard');
          }}
        /> */}
      </div>
    </div>
  );
}
