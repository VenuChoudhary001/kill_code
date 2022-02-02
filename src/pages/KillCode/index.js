import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BUTTON from "../../Components/Button";
import CountDown from "../../Components/CountDown";
// import Navbar from '../../Components/Navbar';
import TextBox from "../../Components/TextBox";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
import Loading from "../../Components/Loading";
const KILL_CODE = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [msg, setMsg] = useState();
  const { setActive, currRound } = useContext(STORE);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/killcode`, {
        method: "POST",
        headers: { ...headers },
        body: JSON.stringify({
          killcode: code,
        }),
      });
      let data = await res.json();
      if (data === "wrong") {
        setMsg("Wrong");
      } else if (data === "correct") {
        setMsg("Congratulations  , you found the kill code . Hence the game has ended");
      } else {
        setMsg("GAME HAS ENDED");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleClick = () => {
    if (code !== "") {
      setLoading(true);
      getData();
    } else {
      alert("PLEASE ENTER THE KILL CODE");
    }
  };

 
  const apiCall = async () => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("tkn"),
    };
    let res = await fetch(`${BASE_URL}quiz/killcode`, {
      method: "GET",
      headers: { ...headers },
    });
    let result= await res.json();
    if(result==="0"){
      setMsg("GAME HAS ENDED");
      localStorage.setItem("end",true);
    }
  };
   /*eslint-disable */
  useEffect(() => {
    apiCall();
  }, []);

  /* eslint-disable */
  useEffect(() => {
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    ) {
      setActive(null);
      navigate("/");
    }
  }, []);

  if (msg === "GAME HAS ENDED" || msg==="Congratulations  , you found the kill code . Hence the game has ended") {
    return (
      <>
        <section className="container">
          <main className="kill-code">{msg}</main>
        </section>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <Loading />{" "}
      </>
    );
  }
  return (
    <>
      {/* <Navbar/> */}
      <section className="container">
        {currRound && currRound.kill_code_time && (
          <CountDown end={currRound.kill_code_time} /> 
        )}<br/>
        <main className="kill-code">
          {msg && <div>The answer you entered was {msg}</div>}
          <div className="kill-title">ENTER KILL CODE</div>
          {currRound && currRound.kill_code_time &&  <div className="line1"></div>}
          <TextBox
            action={(e) => setCode(e.target.value)}
            placeholder={"KILLCODE"}
          />
          <BUTTON lable={"SUBMIT"} action={handleClick} />
        </main>
      </section>
    </>
  );
};

export default KILL_CODE;
