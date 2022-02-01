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
  const { currRound } = useContext(STORE);
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
      // console.log(res.data);
      let result = await res.json();
      console.log(result);
      setEvidence(result);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        localStorage.removeItem("tkn");
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
      navigate("/");
  }, []);

  if (!evidence) {
    return <Loading />;
  }

  const contentNote = () => {
    const note = evidence.evidences.map((item, index) => 
     item.killer_msg
    );
    console.log(note);
    return (
      <>
      <div className="note-title">NOTES FROM THE KILLER</div>
      <div className="note_killer_modal">
        {note.length > 0 ? (
          note.map(item=><li>{item}</li>)
        ) : (
          <div className="info">NO NOTES AVAILABLE</div>
        )}
      </div>
      </>
    );
  };

  return (
    <>
      <SubNav />
      <section className="container">
        <div className="notes_killer" onClick={() => setShow(!show)}>
          NOTES FROM THE KILLER{" "}
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
