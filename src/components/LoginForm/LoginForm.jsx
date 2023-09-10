import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/todos');
    } catch {
      setError('Log In Failed! Please check your email and/or password and enter the correct values.');
    }
  }

  return (
    <div>
      <div class="new-note-form">
        <div class="formDiv">
          <form onSubmit={handleSubmit} className="input-box">
              <div class="row mb-4">
                  <label for="inputEmail3" class="col-sm-12 col-md-4 col-form-label">Email:</label>
                  <div class="col-sm-12 col-md-8 inputField">
                    <input className="todo-input" type="text" name="email" value={credentials.email} onChange={handleChange} required />
                  </div>
              </div>
              <div class="row mb-4">
                  <label for="inputPassword3" class="col-sm-12 col-md-4 col-form-label">Password:</label>
                  <div class="col-sm-12 col-md-8 inputField">
                    <input className="todo-input" type="password" name="password" value={credentials.password} onChange={handleChange} required />
                  </div>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Login</button>
            
          </form>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}