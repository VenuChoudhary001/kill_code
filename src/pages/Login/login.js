import "./login.scss";

function Login() {
  return (
    <div className="reg-page">
      <div className="card">
        <div className="cardHead">LOG IN</div>
        <form>
          <label>
            <div className="name">Team Name:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Password :</div>
            <input type="password" name="password" />
          </label>
          <div className="registerButton">Submit</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
