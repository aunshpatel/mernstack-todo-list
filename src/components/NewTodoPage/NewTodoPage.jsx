import { useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';
// import './NewNoteForm.css';

export default function NewTodoForm({ handleAddNote }) {
    const [taskText, setTaskText] = useState('');
    const [taskStatus, setTaskStatus] = useState('Pending');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        // if (noteText === '') return;
        try {
            const newTodo = await todosAPI.createTodos({ taskText: taskText, taskStatus:taskStatus, startDate:startDate, endDate:endDate });
            setTaskText('');
            setTaskStatus('Pending');
            setStartDate('');
            setEndDate('');
            handleAddNote(newTodo);
            // const newTodo = await todosAPI.createTodos({ taskText: taskText});
            setTaskText('');
            
            handleAddNote(newTodo);
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
         <p>Add a Todo: </p>
         <form onSubmit={handleSubmit} className="input-box">
            <table>
                <tbody>
                <tr>
                    <td>
                        Task:
                    </td>
                    <td>
                        <textarea className="todo-input" value={taskText} onChange={(evt) => setTaskText(evt.target.value)}></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        Status:
                    </td>
                    <td>
                        <select className="todo-status" name="todo-status-option" onChange={onOptionChangeHandler}>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Start Date:
                    </td>
                    <td>
                        
                        <input type="date" className="todo-start-date" value={startDate} onChange={(evt) => setStartDate(evt.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        End Date:
                    </td>
                    <td>
                        
                        <input type="date" className="todo-end-date" value={endDate} onChange={(evt) => setEndDate(evt.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button type="submit" className="add-todo-button">Add Todo</button>
                    </td>
                </tr>
                </tbody>
            </table>
         </form>
       </div> 
    );
}