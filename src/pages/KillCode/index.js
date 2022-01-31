import React, { useState } from 'react';
import BUTTON from '../../Components/Button';
import Navbar from '../../Components/Navbar';
import TextBox from '../../Components/TextBox';
import { BASE_URL } from '../../constants';
const KILL_CODE = () => {


  const [code,setCode]=useState();
//   const [show,setShow]=useState(false);
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
        
        console.log(data);
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





  return <>
  <Navbar/>
  <section className='container'>
      <main className='kill-code'>

     <div className='kill-title'>ENTER KILL CODE</div>
     <TextBox action={(e)=>setCode(e.target.value)} placeholder={"KILLCODE"} />
     <BUTTON lable={"SUBMIT"} action={handleClick} />
      </main>
  </section>
  </>;
};

export default KILL_CODE;
