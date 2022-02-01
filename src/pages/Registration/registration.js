import { useState, useEffect ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
import HEADER from "../../Layout/header";
import "./registration.scss";

function Registration() {
  const navigate = useNavigate();
  const {setActive}=useContext(STORE);
  let audio = new Audio("among.mp3");

  /* eslint-disable */
  useEffect(() => {
    if (
      localStorage.getItem("tkn") &&
      localStorage.getItem("tkn") !== undefined
    )
      {
        navigate("/game");
        setActive(null)
    }
  }, [navigate]);

  const [msg, setMsg] = useState("");

  const [user, setUser] = useState({
    password: "",
    teamname: "",
  });

  const [form, setForm] = useState({
    participant1: "",
    participant1_email: "",
    participant1_dc: "",
    participant1_phone: "",
    participant2: "",
    participant2_email: "",
    participant2_dc: "",
    participant2_phone: "",
    participant3: "",
    participant3_email: "",
    participant3_dc: "",
    participant3_phone: "",
    participant4: "",
    participant4_email: "",
    participant4_dc: "",
    participant4_phone: "",
  });

  const submitReg = async () => {
    audio.play();
    console.log(form);
    const dat = {
      user: {
        password: user.password,
      },
      team_name: user.teamname,
      participant1: form.participant1,
      participant1_email: form.participant1_email,
      participant1_dc: form.participant1_dc,
      participant1_phone: form.participant1_phone,
      participant2: form.participant2,
      participant2_email: form.participant2_email,
      participant2_dc: form.participant2_dc,
      participant2_phone: form.participant2_phone,
      participant3: form.participant3,
      participant3_email: form.participant3_email,
      participant3_dc: form.participant3_dc,
      participant3_phone: form.participant3_phone,
      participant4: form.participant4,
      participant4_email: form.participant4_email,
      participant4_dc: form.participant4_dc,
      participant4_phone: form.participant4_phone,
    };
    console.log(dat);
    fetch(`${BASE_URL}quiz/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dat),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          console.log(response);
          const resp = await response.json();
          console.log(resp);
          if (resp.participant1_email) setMsg(resp.participant1_email[0]);
          else if (resp.participant2_email) setMsg(resp.participant2_email[0]);
          else if (resp.participant3_email) setMsg(resp.participant3_email[0]);
          else if (resp.participant4_email) setMsg(resp.participant4_email[0]);
          else if (resp.user.username) setMsg("Teamname cannot contain space.");
          else setMsg(resp);
        } else {
          const data = await response.json();
          console.log("Success:", data);

          if (data.token && data.token !== undefined) {
            localStorage.setItem("tkn", data.token);
            navigate("/game");
          } else {
            console.log("error");
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="reg-page">
     <HEADER/>
      <div className="card">
        <div className="cardHead">REGISTRATION</div>
        <div className="msg">{msg}</div>
        <form>
          <div className="inputGroup">
            <input
              type="text"
              name="teamname"
              placeholder="Team Name"
              onChange={(ev) => {
                setUser({ ...user, teamname: ev.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <div className="inputGroup">
            <div className="name">Member 1:*</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, participant1: e.target.value });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, participant1_email: e.target.value });
              }}
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord ID"
              onChange={(e) => {
                setForm({ ...form, participant1_dc: e.target.value });
              }}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone (Whatsapp)"
              onChange={(e) => {
                setForm({ ...form, participant1_phone: e.target.value });
              }}
            />
          </div>
          <div className="inputGroup">
            <div className="name">Member 2:*</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, participant2: e.target.value });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, participant2_email: e.target.value });
              }}
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord ID"
              onChange={(e) => {
                setForm({ ...form, participant2_dc: e.target.value });
              }}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone (Whatsapp)"
              onChange={(e) => {
                setForm({ ...form, participant2_phone: e.target.value });
              }}
            />
          </div>
          <div className="inputGroup">
            <div className="name">Member 3:</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, participant3: e.target.value });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, participant3_email: e.target.value });
              }}
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord ID"
              onChange={(e) => {
                setForm({ ...form, participant3_dc: e.target.value });
              }}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone (Whatsapp)"
              onChange={(e) => {
                setForm({ ...form, participant3_phone: e.target.value });
              }}
            />
          </div>
          <div className="inputGroup">
            <div className="name">Member 4:</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, participant4: e.target.value });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, participant4_email: e.target.value });
              }}
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord ID"
              onChange={(e) => {
                setForm({ ...form, participant4_dc: e.target.value });
              }}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone (Whatsapp)"
              onChange={(e) => {
                setForm({ ...form, participant4_phone: e.target.value });
              }}
            />
          </div>
        </form>
        <div className="registerButton" onClick={submitReg}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default Registration;
