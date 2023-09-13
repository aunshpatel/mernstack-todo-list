// import { updatePassword } from "../../utilities/users-api";
import { json, useNavigate } from "react-router-dom";
import * as usersAPI from '../../utilities/users-api';
import { useState, useEffect} from 'react';
import * as usersServices from '../../utilities/users-service';

export default function UpdateProfilePage({ user, setUser }) {
    const navigate = useNavigate();
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        setUsername(user.name);
        setEmail(user.email);
    },[]);

    async function handleSubmit(evt) {
        // const token = usersServices.getToken();
        // console.log("Update handleSubmit token:"+token);
        // console.log("Update handleSubmit token:"+JSON.parse(atob(token.split('.')[1])).user);
        evt.preventDefault();
        try {
            // let tokenData=localStorage.getItem('token');
            // console.log('tokenData: '+JSON.stringify(tokenData))
            let data={name:name, email:email}
            console.log("UserID:"+user._id);
            // await usersAPI.(user._id, { taskText: taskText, taskStatus:taskStatus, startDate:startDate, endDate:endDate });
            const updatedUser = await usersServices.updateUser(data);
            console.log(updatedUser);
            setUser(updatedUser);
            setUsername('');
            setEmail('');
            
            
            alert('Todo updated successfully. You will now be redirected to the Todo List Page.');
            // setUser(usersServices.getUser())
            navigate('/todos');
        } catch (err) {
            console.log('Error creating todo: ', err);
        }
    }

    return (
        <div>
        <div className="new-note-form">
            <h2>Update Profile</h2>
            <h5>Update your name and/or email id here.</h5>
            <br />
            <div className="formDiv">
                <form onSubmit={handleSubmit} className="input-box">
                    <div className="row mb-4">
                        <label for="inputEmail3" className="col-sm-12 col-md-4 col-form-label">Name:</label>
                        <div className="col-sm-12 col-md-8 inputField">
                            {/* <label for="inputEmail3" className="col-form-label">{user.name}</label> */}
                            <input type="input" className="todo-input" value={name} onChange={(evt) => setUsername(evt.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <label for="inputPassword3" className="col-sm-12 col-md-4 col-form-label">Email ID:</label>
                        <div className="col-sm-12 col-md-8 inputField">
                            {/* <label for="inputEmail3" className="col-form-label">{user.email}</label> */}
                            <input type="email" className="todo-input" value={email} onChange={(evt) => setEmail(evt.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-4 updateProfileBtn">
                        {/* <button type="submit" className="btn btn-primary btn-lg col-sm-12 col-md-5" onClick={() => updateProfile(user._id, user)} >Update Profile</button> */}
                        <button type="submit" className="btn btn-primary btn-lg col-sm-12 col-md-5">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}