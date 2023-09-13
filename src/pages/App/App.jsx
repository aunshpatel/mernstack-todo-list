import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import './App.css';
import '../../index.css'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewTodoForm from '../../components/NewTodoPage/NewTodoPage';
import MyTodosPage from '../../pages/TodoListPage/TodoListPage';
import UpdateTodoForm from '../../components/UpdateTodo/UpdateTodo';
import ProfilePage from '../../components/MyProfilePage/MyProfilePage';
import UpdateProfilePage from '../../components/UpdateProfile/UpdateProfile';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/new" element={<NewTodoForm />} />
              <Route path="/" element={<MyTodosPage />} />
              <Route path="/update/:id" element={<UpdateTodoForm />} />
              <Route path="/profilepage" element={<ProfilePage  user={user} setUser={setUser}/>} />
              <Route path="/profilepage/update" element={<UpdateProfilePage  user={user} setUser={setUser}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
