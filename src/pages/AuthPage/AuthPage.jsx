import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <div>
        <div className='titleDiv'>
          <h1>Welcome to The Todo List</h1>
        </div>
      </div>
      <h3>{showSignUp ? 'Registration' : 'Login'} Page</h3>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      <div>
        <button type="submit" class="btn btn-primary btn-lg" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already a user? Click here to login.' : 'New User? Click here to register.'}</button>
      </div>
    </main>
  );
}