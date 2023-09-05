import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/todos">Todo List</Link>
      &nbsp;&nbsp;
      <Link to="/todos/new">Add New Todo</Link>
      &nbsp;&nbsp;
      <Link to="#">My Profile</Link>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}