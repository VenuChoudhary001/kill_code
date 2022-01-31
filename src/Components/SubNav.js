import React, {  useContext } from "react";
import CountDown from "./CountDown";
import STORE from "../Context/store";
const SubNav = ({ round }) => {
  const { currRound} = useContext(STORE);

  
  if(currRound && currRound.message)
    return <></>

  


  return (
    <>
      <main className="sub-nav">
        <div className="round-number">
          ROUND {currRound && currRound.round_no}
        </div>
        <div className="line"></div>
        <div className="time">
          {currRound.start_time && (
            <CountDown
              end={currRound.end_time}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default SubNav;
