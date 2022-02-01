import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "../../Components/List";
import Loading from "../../Components/Loading";
import Modal from "../../Components/Modal";
// import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import { BASE_URL } from "../../constants";
import STORE from "../../Context/store";
const EVIDENCE_ROOM = () => {
  const { currRound,setActive } = useContext(STORE);
  const [show, setShow] = useState(false);

  const [evidence, setEvidence] = useState();

  const navigate = useNavigate();
  const getData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("tkn"),
      };
      let res = await fetch(`${BASE_URL}quiz/evidence`, {
        headers: headers,
        method: "GET",
      });
    
      let result = await res.json();
    
      setEvidence(result);
    } catch (error) {
     
      if (error.status === 401) {
        localStorage.removeItem("tkn");
        setActive(null);
        navigate("/", { replace: true });
      }
    }
  };
  /* eslint-disable */
  useEffect(() => {
    getData();
    if (
      !localStorage.getItem("tkn") ||
      localStorage.getItem("tkn") === undefined
    )
     {setActive(null);
        navigate("/");}
  }, []);

  if (!evidence) {
    return <Loading />;
  }

  const contentNote = () => {
    if(!evidence.killer_note){
      return<><div className="info---">NO NOTES AVAILABLE</div></>
    }
    const note =evidence && evidence.killer_note && evidence.killer_note;
    return (
      <>
      <div className="note-title">NOTES FROM THE KILLER  </div>
      <div className="note_killer_modal" dangerouslySetInnerHTML={{__html:`${note}`}}/>
      </>
    );
  };

  return (
    <>
      <SubNav />
      <section className="container">
        <div className="list" onClick={() => setShow(!show)}>
        <div className="title">

        KILLER'S NOTE
        </div>
        <div className="icon">
          <svg
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0141 11.2016L12.216 9.99971L2.59911 0.382812L0.195312 2.78661L7.40671 9.99971L0.195312 17.2128L2.59911 19.6166L11.0141 11.2016Z"
              fill="white"
            />
          </svg>
        </div>
        </div>
        {evidence &&
          evidence.evidences.map((item, index) => (
            <List key={index} item={item} type={"evidence"} />
          ))}

        {currRound && new Date() <= new Date(currRound.end_time) && (
          <List item={currRound} type="evidence" key={currRound.id} />
        )}
      </section>
      {show && <Modal setShow={() => setShow(!show)} content={contentNote()} />}
    </>
  );
};

export default EVIDENCE_ROOM;
