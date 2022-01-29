//  import "./timer.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HEADER from "../../Layout/header";
import Timer from "../../Components/Timer";

function TIMER() {
  const navigate = useNavigate();

  let audio = new Audio("among.mp3");

  useEffect(() => {
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    )
      navigate("/");
  }, [navigate]);
  const Logout = () => {
    audio.play();
    fetch("https://killcode.myrealms.in/quiz/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      },
      body: {},
    })
      .then((response) => {
        if (response.status !== 204) {
          localStorage.removeItem("tkn");
          navigate("/");
          console.log(response);
        } else {
          localStorage.removeItem("tkn");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="timer">
        <HEADER />
        <Timer
          date={"Tue Feb 01 2022 18:30:00 GMT+0530 (India Standard Time)"}
        />
        <div className="registerButton" onClick={Logout}>
          Logout
        </div>
      </div>
    </>
  );
}

export default TIMER;
