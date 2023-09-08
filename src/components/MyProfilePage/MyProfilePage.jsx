export default function ProfilePage({ user, setUser }) {
  return (
    <div>
      <div class="new-note-form">
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
          </form>
        </div>
      </div>
    </div>
  );
}