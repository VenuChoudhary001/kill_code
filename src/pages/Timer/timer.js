import "./timer.scss";
import React, { useEffect, useState } from "react";

function Timer() {
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
  });

  return (
    <>
      <div className="timer">
        <div className="card">
          <div className="cardHead">
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
        </div>
      </div>
    </>
  );
}

export default Timer;
