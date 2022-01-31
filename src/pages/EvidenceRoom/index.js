
import React, { useContext ,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import List from "../../Components/List";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
const EVIDENCE_ROOM = () => {
  const {  currRound } = useContext(STORE);


const [evidence,setEvidence]=useState();

const navigate=useNavigate();
const getData=async ()=>{
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("tkn"),
    };
    let res= await fetch(`${BASE_URL}quiz/evidence`,{headers:headers,method:"GET"});
    // console.log(res.data);
    let result=await res.json();
    setEvidence(result);
  } catch (error) {
    console.log(error);
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
    navigate("/");
},[])


  return (
    <>
      <SubNav />
      <section className="container">
        {evidence &&
          evidence.evidences.map((item,index) => (
            <List key={index} item={item} type={"evidence"} />
          ))}
        
          {currRound && new Date() <= new Date(currRound.end_time) &&
           <List 
           item={currRound}
           type="evidence"
           key={currRound.id}
           />
          }
         
      </section>
    </>
  );
};

export default EVIDENCE_ROOM;
