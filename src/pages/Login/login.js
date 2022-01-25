import { useState } from "react";
import "./login.scss";

function Login() {
  const [form, setForm] = useState({
    teamname:"",
    password:"",
  })

  const submitLog = () => {
    console.log(form);
  }

  return (
    <div className="log-page">
      <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLING BEGINS ON 1ST FEBRUARY</div>
        </div>
      <div className="card">
        <div className="cardHead">LOG IN</div>
        <form>
          <div className="inputGroup">
            <input type="text" name="name" placeholder="Team Name" onChange={(e) => {
              setForm({...form, teamname:e.target.value})
            }}/>
            <input type="password" name="password" placeholder="Password" onChange={(e) => {
              setForm({...form, password:e.target.value})
            }}/>
          </div>
          
          <div className="registerButton" onClick={submitLog}>Submit</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
