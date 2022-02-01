import React, {useState,useEffect,useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import List from "../../Components/List";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import STORE from "../../Context/store";

const LEADERBOARD = () => {
  const { setActive ,leaderCall,setLeaderCall} = useContext(STORE);
  const [data,setData]=useState();
  const navigate=useNavigate();
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
      if(error.status===401){
        localStorage.removeItem("tkn");
        setActive(null)
        navigate('/',{replace:true});
      }
    }
  };
 
  /*eslint-disable */
  useEffect(()=>{
    getData();
    if(leaderCall){
      setLeaderCall(!leaderCall);
    }
     if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    )
   {setActive(null);   navigate("/");}
  },[leaderCall])
  if(!data){
    return <Loading/>
  }
  return (
    <>
      {/* <Navbar /> */}
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
