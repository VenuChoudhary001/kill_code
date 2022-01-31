import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";

const PROFILES = () => {
  const { data } = useContext(STORE);
   
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

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <Navbar />
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
