import "./home.scss";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let audio = new Audio("among.mp3");
  const start = () => {
    audio.play()
  }

  useEffect(() => {
    if(localStorage.getItem("tkn") && localStorage.getItem("tkn")!==undefined)
      navigate('/timer/')
  }, [navigate])

  return (
    <>
      <div className="homePage">
        <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLINGS BEGIN ON 1ST FEBRUARY</div>
        </div>
        <div className="buttonWrapper">
          <Link to="/registration">
            <div className="registerButton" onClick={start}>REGISTER</div>
          </Link>
          <Link to="/login">
            <div className="loginButton" onClick={start}>LOGIN</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
