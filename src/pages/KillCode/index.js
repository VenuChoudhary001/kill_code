import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BUTTON from '../../Components/Button';
// import Navbar from '../../Components/Navbar';
import TextBox from '../../Components/TextBox';
import { BASE_URL } from '../../constants';
import STORE from '../../Context/store';
const KILL_CODE = () => {

const navigate=useNavigate();
  const [code,setCode]=useState();
  const [msg,setMsg]=useState();
  const {setActive}=useContext(STORE);
  const getData=async ()=>{
    try {
        let headers = {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("tkn"),
        };
        let res = await fetch(`${BASE_URL}quiz/killcode`, {
          method: "POST",
          headers: { ...headers },
          body:JSON.stringify( {
           killcode:code
          }),
        });
        let data=await res.json()
         if(data==='wrong'){
           setMsg("Wrong");
         }
         else if(data==="correct"){
           setMsg("Correct")
         }else{
           setMsg("GAME HAS ENDED")
         }

 
      } catch (error) {
        console.log(error);
      }
  }
  
  const handleClick=()=>{
      if(code!==""){

          getData()
        }else{
            alert("PLEASE ENTER THE KILL CODE")
        }
  }


/* eslint-disable */
useEffect(()=>{
  if (
    !localStorage.getItem("tkn") ||
    localStorage.getItem("tkn") === undefined
  )
  {setActive(null);  navigate("/");}
},[])
  
  if(msg==="GAME HAS ENDED"){
    return <>
     <section className='container'>
      <main className='kill-code'>
      {msg}
      </main>
      
  </section>
    </>
  }
  return <>
  {/* <Navbar/> */}
  <section className='container'>
      <main className='kill-code'>
       {msg && <div>The answer you entered was {msg}</div>}
     <div className='kill-title'>ENTER KILL CODE</div>
     <TextBox action={(e)=>setCode(e.target.value)} placeholder={"KILLCODE"} />
     <BUTTON lable={"SUBMIT"} disable={true} action={handleClick} />
      </main>
      
  </section>
  </>;
};

export default KILL_CODE;
