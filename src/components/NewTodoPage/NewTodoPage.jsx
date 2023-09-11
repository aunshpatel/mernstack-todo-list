import { useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import "../../index.css";
import { useNavigate } from "react-router-dom";

export default function NewTodoForm() {
    const navigate = useNavigate();
    const [taskText, setTaskText] = useState('');
    const [taskStatus, setTaskStatus] = useState('Pending');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await todosAPI.createTodos({ taskText: taskText, taskStatus: taskStatus, startDate: startDate, endDate: endDate });
            setTaskText('');
            setTaskStatus('Pending');
            setStartDate('');
            setEndDate('');
            
            alert('Todo added successfully. You will now be redirected to the Todo List Page.');
            navigate('/todos');
        } catch (err) {
            console.log('Error creating todo: ', err);
        }
    }
    
    const onOptionChangeHandler = (evt) => {
        console.log("User Selected Value - ", evt.target.value);
        setTaskStatus(evt.target.value)
    }

    return (
       <div className="new-note-form"> 
            <h1>Add New Todo</h1>
            <div className='formDiv'>
                <form onSubmit={handleSubmit} className="input-box">
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label">Task:</label>
                        <div class="col-sm-8 inputField">
                            <textarea className="todo-input" value={taskText} onChange={(evt) => setTaskText(evt.target.value)} rows="5" required></textarea>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputPassword3" class="col-sm-4 col-form-label">Status:</label>
                        <div class="col-sm-8 inputField">
                            <select className="form-select" name="todo-status-option" onChange={onOptionChangeHandler} required>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label"> Start Date:</label>
                        <div class="col-sm-8 inputField">
                            <input type="date" className="todo-start-date" value={startDate} onChange={(evt) => setStartDate(evt.target.value)} required />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col-sm-4 col-form-label">End Date:</label>
                        <div class="col-sm-8 inputField">
                            <input type="date" className="todo-end-date" value={endDate} onChange={(evt) => setEndDate(evt.target.value)} required />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">Add Todo</button>
                </form>
         </div>
       </div> 
    );
}