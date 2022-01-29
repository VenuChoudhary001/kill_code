import React, { useState,useEffect } from 'react';

const STORE=React.createContext();


export const PROVIDER=({children})=>{
const [data, setData] = useState({});//profiles , locations , evidences , leaderboard
const [roundLimit,setRoundLimit]=useState();

//For navbar active setup
const [active,setActive]=useState(0);
//Replace with the API
useEffect(() => {
  // audio.loop();
  fetch("data.json")
    .then((res) => res.json())
    .then((result) => setData(result));
}, []);
 


    return (
      <STORE.Provider value={{ data, active, setActive }}>
      
        {children}
      </STORE.Provider>
    );
}


export default STORE;