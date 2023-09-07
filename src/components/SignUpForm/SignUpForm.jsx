import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div class="new-note-form">
          <div class="formDiv">
            <form onSubmit={this.handleSubmit} className="input-box">
                <div class="row mb-4">
                    <label for="inputEmail3" class="col-sm-6 col-form-label">Name:</label>
                    <div class="col-sm-6 inputField">
                      <input className="todo-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                </div>
                <div class="row mb-4">
                    <label for="inputPassword3" class="col-sm-6 col-form-label">Password:</label>
                    <div class="col-sm-6 inputField">
                      <input className="todo-input" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                </div>
                <div class="row mb-4">
                    <label for="inputPassword3" class="col-sm-6 col-form-label">Password:</label>
                    <div class="col-sm-6 inputField">
                      <input className="todo-input" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                </div>
                <div class="row mb-4">
                    <label for="inputPassword3" class="col-sm-6 col-form-label">Confirm Password:</label>
                    <div class="col-sm-6 inputField">
                      {/* <input className="todo-input" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /> */}
                      <input className="todo-input" type={values.showPassword ? "text" : "password"} name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" disabled={disable}>Sign Up</button>
            </form>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}