import axios from "axios";
import React,{useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import List from "../../Components/List";
import Loading from "../../Components/Loading";

import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";


const PROFILES = () => {
 
   
  const [profiles,setProfiles]=useState();
  const navigate=useNavigate();
  const {setActive}=useContext(STORE);
  const getData=async ()=>{
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res=await axios.get(`${BASE_URL}quiz/profiles`,{headers:headers});
      console.log(res.data);
      setProfiles(res.data);
    } catch (error) {
      if(error.status===401){
        localStorage.removeItem("tkn");
        navigate('/',{replace:true});
      }
    }
    
  }

  /* eslint-disable */
  useEffect(()=>{
    getData();
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    )
    {setActive(null);  navigate("/");}
  },[])
  if(!profiles){
    return <Loading/>
  }

  return (
    <>
      {/* <Navbar /> */}
      <SubNav/>
      <section className="container">
        {profiles &&
          profiles.map((item,index) => <List item={item}
          type="profile"
          key={index} />)}
      </section>
    </>
  );
};

export default PROFILES;
