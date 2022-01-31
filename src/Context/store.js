import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import axios from "axios";
const STORE = React.createContext();

const initialState = {};

export const PROVIDER = ({ children }) => {
  const [data, setData] = useState({});
  const [roundLimit, setRoundLimit] = useState();
  const [roundGap,setRoundGap]=useState();



  const [status, setStatus] = useState();
  // For navbar active setup
  const [active, setActive] = useState(0);
  // Current Round data
  const [currRound, setCurrRound] = useState({});
  const [user, setUser] = useState({});

  const [apiCall, setApiCall] = useState(true);
  //  if(currRound && new Date() >= new Date(currRound.next_round_start_time)){
  //    setApiCall(true);
  //  }

  const getData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await axios.get(`${BASE_URL}quiz/round`, {
        headers: { ...headers },
      });
       console.log(res.data);
      setCurrRound(res.data);
    } catch (error) {
      console.log(error.response);
      setCurrRound(error.response.data)
    }
  };
 /* eslint-disable */
  useEffect(() => {
    if (apiCall) {
      getData();
      setApiCall(false);
    }
   
    
  }, [apiCall]);



  //Replace with the API
  // useEffect(() => {
  //   // audio.loop();

  //   // call quiz/round api for details of curr round

  // }, []);

  /*
  
  if(currRound)
  
  */

  return (
    <STORE.Provider
      value={{
        active,
        setActive,
        roundLimit,
        roundGap,
        currRound,
        setCurrRound,
        user,
        setUser,
        setApiCall,status, setStatus
      }}
    >
      {children}
    </STORE.Provider>
  );
};

export default STORE;

/*

*/
