import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';
import '../../index.css'

export default function TodoListPage() {
  const [todos, setTodos] = useState([]);
  
  //   {
  //       name: '#',
  //       selector: row => row.index,
  //       sortable: true,
  //   },
  //   {
  //       name: 'Task',
  //       selector: row => row.task,
  //       sortable: true,
  //   },{
  //     name: 'Status',
  //     selector: row => row.status,
  //     sortable: true,
  //   },{
  //     name: 'Start Date',
  //     selector: row => row.startdate,
  //     sortable: true,
  //   },{
  //     name: 'End Date',
  //     selector: row => row.enddate,
  //     sortable: true,
  //   },{
  //     name: '',
  //     selector: row => row.update,
  //     sortable: false,
  //   },{
  //     name: '',
  //     selector: row => row.delete,
  //     sortable: false,
  //   },
  // ];

  // const paginationComponentOptions = {
  //   rowsPerPageText: 'Rows Per Page',
  //   rangeSeparatorText: 'of',
  //   selectAllRowsItem: true,
  // };
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);
  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
      setrpg(parseInt(event.target.value, 10));
      setpg(0);
  }
  function updateTodo(todoID){
    alert("Update Todo: "+todoID)
  }

  function deleteTodo(todoID){
    alert("Delete Todo: "+todoID)
  }

  useEffect(() => {
    async function getNotes() {
      const todos = await todosAPI.getAll();
      // const sortedNotes = sortNotes(notes, sortOrder);
      setTodos(todos);
    }
    getNotes();
  });

  return (
    <>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No Todo Added Yet!</p>
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
                    {/* <Button variant="contained" onClick={() => handleClick(row.id)}>Click me</Button> */}
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={todos.length}
          rowsPerPage={rpg}
          page={pg}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
       </div>
      )}
      
    </>
  );
}