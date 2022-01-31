import axios from "axios";
import React,{useEffect,useState} from "react";
import List from "../../Components/List";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";


const PROFILES = () => {
 
   
  const [profiles,setProfiles]=useState();


  const getData=async ()=>{
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("tkn"),
    };
    let res=await axios.get(`${BASE_URL}quiz/profiles`,{headers:headers});
    console.log(res.data);
    setProfiles(res.data);
  }

  /* eslint-disable */
  useEffect(()=>{
    getData();
  },[])

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
