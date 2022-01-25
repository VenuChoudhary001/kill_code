import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.scss";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    teamname:"",
    password:"",
  })

  const submitLog = () => {
    console.log(form);
    fetch("http://139.59.45.195/quiz/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("tkn",data.token);
        navigate('/timer/');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
