import { useState } from "react";
import "./registration.scss";

function Registration() {
  const [form, setForm] = useState({
    teamname:"",
    password:"",
    participant1:"",
    participant1_email:"",
    participant2:"",
    participant2_email:"",
    participant3:"",
    participant3_email:"",
    participant4:"",
    participant4_email:"",
    participant5:"",
    participant5_email:"",
  })

  const submitReg = () => {
    console.log(form);
  }

  return (
    <div className="reg-page">
      <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLING BEGINS ON 1ST FEBRUARY</div>
        </div>
      <div className="card">
        <div className="cardHead">REGISTRATION</div>
        <form>
          <div className="inputGroup">
            <input type="text" name="name" placeholder="Team Name" onChange={(e) => {
              setForm({...form, teamname:e.target.value})
            }} />
            <input type="password" name="password" placeholder="Password" onChange={(e) => {
              setForm({...form, password:e.target.value})
            }} />
          </div>
          <div className="inputGroup">
            <div className="name">Member 1:*</div>
            <input type="text" name="name" placeholder="Name" onChange={(e) => {
              setForm({...form, participant1:e.target.value})
            }}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => {
              setForm({...form, participant1_email:e.target.value})
            }}/>
          </div>
          <div className="inputGroup">
            <div className="name">Member 2:*</div>
            <input type="text" name="name" placeholder="Name" onChange={(e) => {
              setForm({...form, participant2:e.target.value})
            }}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => {
              setForm({...form, participant2_email:e.target.value})
            }}/>
          </div>
          <div className="inputGroup">
            <div className="name">Member 3:*</div>
            <input type="text" name="name" placeholder="Name" onChange={(e) => {
              setForm({...form, participant3:e.target.value})
            }}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => {
              setForm({...form, participant3_email:e.target.value})
            }}/>
          </div>
          <div className="inputGroup">
            <div className="name">Member 4:</div>
            <input type="text" name="name" placeholder="Name" onChange={(e) => {
              setForm({...form, participant4:e.target.value})
            }}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => {
              setForm({...form, participant4_email:e.target.value})
            }}/>
          </div>
          <div className="inputGroup">
            <div className="name">Member 5:</div>
            <input type="text" name="name" placeholder="Name" onChange={(e) => {
              setForm({...form, participant5:e.target.value})
            }}/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => {
              setForm({...form, participant5_email:e.target.value})
            }}/>
          </div>
        </form>
        <div className="registerButton" onClick={submitReg}>Submit</div>
      </div>
    </div>
  );
}

export default Registration;
