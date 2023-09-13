import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as usersServices from '../../utilities/users-service';

export default function ProfilePage({ user, setUser }) {
  const navigate = useNavigate();

  function updateMyProfile(id){
    navigate('/profilepage/update', {state:{userID:id}});
  }

  useEffect(()=>{
    setUser(usersServices.getUser());
  }, [])
  return (
    <div>
      <div class="new-note-form">
        <h2>My Profile:</h2>
        <br />
        <div class="formDiv">
          <form className="input-box">
              <div class="row mb-4">
                  <label for="inputEmail3" class="col-sm-12 col-md-4 col-form-label">Name:</label>
                  <div class="col-sm-12 col-md-8 inputField">
                    <label for="inputEmail3" class="col-form-label">{user.name}</label>
                  </div>
              </div>
              <div class="row mb-4">
                  <label for="inputPassword3" class="col-sm-12 col-md-4 col-form-label">Email ID:</label>
                  <div class="col-sm-12 col-md-8 inputField">
                    <label for="inputEmail3" class="col-form-label">{user.email}</label>
                  </div>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" onClick={() => updateMyProfile(user._id)}>Click Here To Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}