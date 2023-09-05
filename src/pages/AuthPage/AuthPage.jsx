import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>{showSignUp ? 'Registration' : 'Login'} Page</h1>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      <div>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already a user? Click here to login.' : 'New User? Click here to register.'}</button>
      </div>
    </main>
  );
}