import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();
  const calculateTime = () => {
    const date = new Date();
    const dDay = new Date(
      "Sun Jan 30 2022 00:00:00 GMT+0530 (India Standard Time)"
    );
    let dayCount = Math.floor((dDay - date) / (1000 * 24 * 60 * 60));
    let hrsCount = Math.floor(
      ((dDay - date) % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
    );
    let minCount = Math.floor(
      (((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secCount = Math.floor(
      ((((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) %
        (1000 * 60)) /
        1000
    );

    setSec(secCount);
    setHours(hrsCount);
    setMins(minCount);
  };

  useEffect(() => {
    setInterval(() => {
      calculateTime();
    }, 1000);
  }, []);
 
  return (
    <>
     { <main className="countdown">
        <div className="time">
          <span className="data">
            {hours < 10 ? `0${hours}` : hours} :
          </span>
        </div>
        <div className="time">
          <span className="data">
            {mins < 10 ? `0${mins}` : mins} :
          </span>
        </div>{" "}
        <div className="time">
          <span className="data">
            {sec < 10 ? `0${sec}` : sec}
          </span>
        </div>
      </main>}
    </>
  );
};

export default CountDown;
