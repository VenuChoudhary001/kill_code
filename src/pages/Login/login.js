import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import HEADER from "../../Layout/header";
import "./login.scss";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
import Loading from "../../Components/Loading";

function Login() {
  const navigate = useNavigate();
  const {user,setUser}=useContext(STORE);
  let audio = new Audio("among.mp3");
  const [show,setShow]=useState()
  /* eslint-disable */
  useEffect(() => {
    if(localStorage.getItem("tkn") && localStorage.getItem("tkn")!==undefined)
      {
        setUser({...user,token:localStorage.getItem('tkn')});
        navigate('/game')
      }
  }, []);

  const [form, setForm] = useState({
    username:"",
    password:"",
  })

  const [msg,setMsg] = useState("");

  const submitLog = async () => {
    setShow(!show)
    audio.play();

    const dat = {
      team : {
        team_name: form.username,
      },
      password: form.password,
    }
    fetch(`${BASE_URL}quiz/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dat),
    })
      .then(async (response) => 
      {
      if (response.status !== 200) {
        setMsg("Wrong Credentials");
      } else {
        const data = await response.json();
    

        if (data.token && data.token !== undefined) {
          localStorage.setItem("tkn", data.token);
          setUser({...user,token:data.token});
          setShow(false);
          navigate("/game");
        } else {
          console.log("error");
        }
      }
    })
      .catch((error) => {
        console.error("Error:", error);
        setShow(false);
      });
      setShow(false);
  }



 if(show){
   return <Loading/>;
 }
  return (
    <div className="log-page container">
      <HEADER/>
      <div className="card">
        <div className="cardHead">LOG IN</div>
        <div className="msg">{msg}</div>
        <form>
          <div className="inputGroup">
            <input type="text"  placeholder="Team Name" onChange={(e) => 
              setForm({...form, username:e.target.value})
              // handleChange(e,"username")
            }/>
            <input type="password" placeholder="Password" onChange={(e) =>
               setForm({...form, password:e.target.value})
              // handleChange(e,"password")
            }/>
          </div>
          
          <div className="registerButton" onClick={submitLog}>Submit</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
