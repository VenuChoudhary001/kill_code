import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BUTTON from "../../Components/Button";
import CountDown from "../../Components/CountDown";
import TextBox from "../../Components/TextBox";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
import Loading from "../../Components/Loading";
const KILL_CODE = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [msg, setMsg] = useState();
  const { setActive, currRound, endGame } = useContext(STORE);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState();
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
        setMsg(
          "Congratulations  , you found the kill code . Hence the game has ended"
        );
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
    let result = await res.json();
    if (result === "0") {
      setMsg("GAME HAS ENDED");
    }
    if (result === "1") {
      localStorage.removeItem("end");
      setShow(false);
    }
  };
  /*eslint-disable */
  useEffect(() => {
    apiCall();
    if (
      localStorage.getItem("end") &&
      localStorage.getItem("end") !== undefined
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [endGame]);

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

  if (
    msg === "GAME HAS ENDED" ||
    msg ===
      "Congratulations  , you found the kill code . Hence the game has ended"
  ) {
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
  if (show) {
    return (
      <>
        <section className="container">
          <main className="kill-code">GAME HAS ENDED</main>
        </section>
      </>
    );
  }
  return (
    <>
      {/* <Navbar/> */}
      <section className="container">
        {currRound && currRound.kill_code_time && (
          <CountDown end={currRound.kill_code_time} />
        )}
        <br />
        <main className="kill-code">
          {msg && <div>The answer you entered was {msg}</div>}
          <div className="kill-title">ENTER KILL CODE</div>
          {currRound && currRound.kill_code_time && (
            <>
              <div className="kill-code--">
                There is a<strong>future</strong> that you need to look into,<strong>boy</strong><br/>
                The <strong>base</strong> should be strong <strong>all letters</strong> are needed, not a toy;<br/>
                And when you get the answer,<strong>keep a word</strong><br/>
                Because you <strong>go back to the base,</strong>that should occur <br/>
                Enter the answer, you are in the right mode,<br/>
                All the <strong>links connect</strong>,that to a killcode.
              </div>
            </>
          )}
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
