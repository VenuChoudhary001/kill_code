import "./home.scss";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("tkn") && localStorage.getItem("tkn")!==undefined)
      navigate('/timer/')
  }, [navigate])

  return (
    <>
      <div className="homePage">
        <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLING BEGINS ON 1ST FEBRUARY</div>
        </div>
        <div className="buttonWrapper">
          <Link to="/registration">
            <div className="registerButton">REGISTER</div>
          </Link>
          <Link to="/login">
            <div className="loginButton">LOGIN</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
