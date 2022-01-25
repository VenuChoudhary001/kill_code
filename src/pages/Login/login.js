import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.scss";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("tkn") && localStorage.getItem("tkn")!==undefined)
      navigate('/timer/')
  }, [navigate])

  const [form, setForm] = useState({
    username:"",
    password:"",
  })

  const [msg,setMsg] = useState("");

  const submitLog = async () => {
    console.log(form);
    fetch("https://killcode.myrealms.in/quiz/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (response) => 
      {
      if (response.status !== 200) {
        console.log(response);
        const resp = await response.json();
        setMsg(resp);
        console.log(resp)
      } else {
        const data = await response.json();
        console.log("Success:", data);

        if (data.token && data.token !== undefined) {
          localStorage.setItem("tkn", data.token);
          navigate("/timer/");
        } else {
          console.log("error");
        }
      }
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
        <div className="msg">{msg}</div>
        <form>
          <div className="inputGroup">
            <input type="text" name="name" placeholder="Team Name" onChange={(e) => {
              setForm({...form, username:e.target.value})
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
