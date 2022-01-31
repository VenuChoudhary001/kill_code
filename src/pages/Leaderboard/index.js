import React, { useContext,useState,useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import STORE from "../../Context/store";

const LEADERBOARD = () => {
  // const { data } = useContext(STORE);
  const [data,setData]=useState([]);
  const getData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await axios.get(`${BASE_URL}quiz/leaderboard`, {
        headers: { ...headers },
      });
       console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error.response);
      // setCurrRoun(error.response.data)
    }
  };

  useEffect(()=>{
     getData();
  },[])
  return (
    <>
      <Navbar />
      <SubNav />
      <section className="container">
          <main className="leaderboard">
        { data.map((item, index) => (<>
            <List key={index} 
            type="team" 
            item={item}
            />
            </>
            ))}

          </main>
      </section>
    </>
  );
};

export default LEADERBOARD;
