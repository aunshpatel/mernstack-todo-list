import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import '../../index.css';
import { useNavigate } from "react-router-dom";

export default function TodoListPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);

  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
      setrpg(parseInt(event.target.value, 10));
      setpg(0);
  }

  useEffect(() => {
    async function getNotes() {
      const todos = await todosAPI.getAll();
      console.log(todos);
      setTodos(todos);
    }
    getNotes();
  },[]);

  async function updateTodo(id){
    navigate(`update/${id}`, {state:{todoID:id}});
  }

  async function deleteTodo(todoID){
    await todosAPI.deleteTodos(todoID);
    alert("Delete Todo: "+todoID);
    console.log('delete function');
    window.location.reload();
    // return false;
    // navigate('/todos')
  }

  return (
    <>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <h3>No Todo Added Yet!</h3>
      ) : (
       <div className="todoTableDiv">
         <div>

         <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Todo</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.slice(pg * rpg, pg *  rpg + rpg).map((todo, idx) => (
                
                <TableRow key={todo._id}>
                  <TableCell>{idx+1}</TableCell>
                  <TableCell>{todo.taskText}</TableCell>
                  <TableCell>{todo.taskStatus}</TableCell>
                  <TableCell>{todo.startDate}</TableCell>
                  <TableCell>{todo.endDate}</TableCell>
                  <TableCell>
                    <Button style={{ backgroundColor: "#F67F00" }} variant="contained" onClick={() => updateTodo(todo._id)}>Update</Button>
                  </TableCell>
                  <TableCell>
                    <Button style={{ backgroundColor: "#ff0000" }} variant="contained" onClick={() => deleteTodo(todo._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} component="div"  count={todos.length} rowsPerPage={rpg} page={pg} 
          onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
        </div>
       </div>
      )}
    </>
  );
}