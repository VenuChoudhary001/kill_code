import "./timer.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("tkn") || localStorage.getItem("tkn")===undefined)
      navigate('/')
  }, [])

  const [clock, setClock] = useState("00:00:00");
  useEffect(() => {
    const getCountdown = async () => {
      var current_date = new Date().getTime();
      let tf = new Date(
        "Tue Feb 01 2022 18:00:00 GMT+0530 (India Standard Time)"
      );
      var target_date = tf.getTime();
      var days, hours, minutes, seconds;

      // find the amount of "seconds" between now and target
      var seconds_left = (target_date - current_date) / 1000;

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      // format countdown string + set tag value
      const html = [days, hours, +minutes, +seconds];
      setClock(html);
    };

    function pad(n) {
      return (n < 10 ? "0" : "") + n;
    }

    getCountdown();
  }, [clock]);

  const Logout = () => {
    fetch("https://killcode.myrealms.in/quiz/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Token " + localStorage.getItem("tkn")
      },
      body: {}
    })
      .then((response) => {
        if (response.status !== 204) {
          console.log(response);
        } else {
          localStorage.removeItem("tkn");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="timer">
      <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLING BEGINS ON 1ST FEBRUARY</div>
        </div>
        
        <div className="timerWrap">
          
            <div className="labelsTime">
              <span>{clock[0]}</span>
              <span>{clock[1]}</span>
              <span>{clock[2]}</span>
              <span>{clock[3]}</span>
            </div>
            <div className="labels">
              <span>Days</span>
              <span>Hours</span>
              <span>Mins</span>
              <span>Secs</span>
            </div>
          
        </div>
        <div className="registerButton" onClick={Logout}>
          Logout
        </div>
      </div>
    </>
  );
}

export default Timer;
