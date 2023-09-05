import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import './App.css';
import '../../index.css'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewTodoForm from '../../components/NewTodoPage/NewTodoPage';
import MyTodosPage from '../../components/TodoListPage/TodoListPage'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/todos/new" element={<NewTodoForm />} />
              <Route path="/todos" element={<MyTodosPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}