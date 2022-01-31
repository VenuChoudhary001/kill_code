import React, { useState, useEffect, useContext } from "react";
import STORE from "../Context/store";

const CountDown = ({end}) => {
  const {setApiCall,currRound}=useContext(STORE);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const [day,setDay]=useState(0)
  const calculateTime = () => {

  

        const date= new Date();
       const dDay=new Date(end);
      let diff=dDay-date;
      // console.log(date,dDay);
    let dayCount = Math.floor((diff) / (1000 * 24 * 60 * 60));
    let hrsCount = Math.floor(
      ((diff) % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
    );
    let minCount = Math.floor(
      (((diff) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secCount = Math.floor(
      ((((diff) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) %
        (1000 * 60)) /
        1000
    );
    
    setSec(secCount);
    setHours(hrsCount);
    setMins(minCount);
    setDay(dayCount)
    
  };
  /* eslint-disable */
  useEffect(() => {

      let myInterval=setInterval(() => {
        calculateTime();
        if(currRound && (new Date() >= new Date(currRound.end_time)||(new Date() >= new Date(currRound.next_round_start_time)))){
          setApiCall(true);
        }
      }, 1000);
      
      return () => {
        clearInterval(myInterval);
      };

  }, []);

  return (
    <>
     { <main className="countdown">
     <div className="time">
         {day >0 && <span className="data">
            {day < 10 ? `0${day}` : day} :
          </span>}
        </div>
        <div className="time">
         {hours >0 && <span className="data">
            {hours < 10 ? `0${hours}` : hours} :
          </span>}
        </div>
        <div className="time">
          {<span className="data">
            {mins < 10 ? `0${mins}` : mins} :
          </span>}
        </div>{" "}
        <div className="time">
          {  <span className="data">
            {sec < 10 ? `0${sec}` : sec}
          </span>}
        </div>
      </main>}
    </>
  );
};

export default CountDown;
