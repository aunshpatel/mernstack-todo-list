import { useState, useEffect } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import "../../index.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateTodoForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const todoID = location.state.todoID;
    const [todo, setTodo] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        async function getTodoByID(id) {
          const todo = await todosAPI.getTodoByID(id);
          console.log(todo);
          setTodo(todo);
        }
        getTodoByID(todoID);
        setTaskText(todo.taskText);
        setTaskStatus(todo.taskStatus);
        setStartDate(todo.startDate);
        setEndDate(todo.endDate);
      },[]);


    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            // const updateTodo = await todosAPI.updateTodo({ taskText: taskText, taskStatus:taskStatus, startDate:startDate, endDate:endDate });
            console.log(todoID);
            await todosAPI.updateTodos(todoID, { taskText: taskText, taskStatus:taskStatus, startDate:startDate, endDate:endDate });
            setTaskText('');
            setTaskStatus('Pending');
            setStartDate('');
            setEndDate('');
            
            alert('Todo updated successfully. You will now be redirected to the Todo List Page.');
            navigate('/todos');
        } catch (err) {
            console.log('Error creating todo: ', err);
        }
    }

    const onOptionChangeHandler = (evt) => {
        console.log("User Selected Value - ", evt.target.value);
        // setTaskStatus(evt.target.value)
    }

    return (
       <div className="new-note-form"> 
            <h1>Update Todo</h1>
            <div className='formDiv'>
                <form onSubmit={handleSubmit} className="input-box">
                {/* <form className="input-box"> */}
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label">Task:</label>
                        <div class="col-sm-8 inputField">
                            {/* <textarea className="todo-input" rows="5"></textarea> */}
                            <textarea className="todo-input" value={taskText} onChange={(evt) => setTaskText(evt.target.value)} rows="5"></textarea>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputPassword3" class="col-sm-4 col-form-label">Status:</label>
                        <div class="col-sm-8 inputField">
                            <select className="form-select" name="todo-status-option" onChange={onOptionChangeHandler} value={taskStatus}>
                            {/* <select className="form-select" name="todo-status-option" onChange={onOptionChangeHandler}> */}
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label"> Start Date:</label>
                        <div class="col-sm-8 inputField">
                            {/* <input type="date" className="todo-start-date"/> */}
                            <input type="date" className="todo-start-date" value={startDate} onChange={(evt) => setStartDate(evt.target.value)}/>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label">End Date:</label>
                        <div class="col-sm-8 inputField">
                            {/* <input type="date" className="todo-end-date"/> */}
                            <input type="date" className="todo-end-date" value={endDate} onChange={(evt) => setEndDate(evt.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">Update Todo</button>
                </form>
         </div>
       </div> 
    );
}