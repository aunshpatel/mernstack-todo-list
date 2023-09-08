import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
      <nav className="nav">
      <span>Welcome, {user.name}</span>
      <div>
        <Link className="nav-item nav-box" to="/todos">Todo List</Link>
        <Link className="nav-item nav-box" to="/todos/new">Add New Todo</Link>
        <Link className="nav-item nav-box" to="/profilepage">My Profile</Link>
        <Link className="nav-item nav-box" to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}