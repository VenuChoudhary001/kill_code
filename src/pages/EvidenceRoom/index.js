import axios from "axios";
import React, { useContext ,useState,useEffect} from "react";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
const EVIDENCE_ROOM = () => {
  const {  currRound } = useContext(STORE);


const [evidence,setEvidence]=useState();
// api call for all evidence uptill last round  -  quiz/evidence

const getData=async ()=>{
  try {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("tkn"),
    };
    let res= await axios.get(`${BASE_URL}quiz/evidence`,{headers:headers});
    console.log(res.data);
    setEvidence(res.data);
  } catch (error) {
    console.log(error.response);
  }
  
}

useEffect(()=>{
   getData();
},[])

// if(new Date.getTime()>currRound.end_time){
//   setUpdateEvidence(true);
// }
/*
useEffect(()=>{
  if(updateEvidence){
    fetch();      // quiz/evidence
    setEvidence();
    setUpdateEvidence(false);
  }
},[updateEvidence])

*/

  return (
    <>
      <Navbar />
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
