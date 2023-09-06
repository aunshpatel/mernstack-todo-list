import { useState, useEffect } from 'react';
import * as todosAPI from "../../utilities/todos-api";
import DataTable from 'react-data-table-component';
import '../../index.css'

export default function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const columns = [
    {
        name: '#',
        selector: row => row.index,
        sortable: true,
    },
    {
        name: 'Task',
        selector: row => row.task,
        sortable: true,
    },{
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },{
      name: 'Start Date',
      selector: row => row.startdate,
      sortable: true,
    },{
      name: 'End Date',
      selector: row => row.enddate,
      sortable: true,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Rows Per Page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
  };
  
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
          <DataTable
            columns={columns}
            data={
              todos.map((todo, idx)=>(
                {
                  index: idx+1,
                  task: todo.taskText,
                  status: todo.taskStatus,
                  startdate:todo.startDate,
                  enddate:todo.endDate,
              }
              ))
            }
            pagination
            paginationComponentOptions={paginationComponentOptions}
        />
        </div>
       </div>
      )}
      
    </>
  );
}