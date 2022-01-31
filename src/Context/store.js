import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";
import axios from "axios";
const STORE = React.createContext();



export const PROVIDER = ({ children }) => {




  const [status, setStatus] = useState();
  // For navbar active setup
  const [active, setActive] = useState(0);
  // Current Round data
  const [currRound, setCurrRound] = useState({});
  const [user, setUser] = useState({});

  const [apiCall, setApiCall] = useState(true);
  

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





  return (
    <STORE.Provider
      value={{
        active,
        setActive,
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
