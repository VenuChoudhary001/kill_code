import React, { useState } from "react";
import Skull from "../Assets/images/skull.png";
import { BASE_URL } from "../constants";
import Modal from "./Modal";

const List = ({type,item}) => {
  const [content, setContent] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    switch (type) {
      case "evidence":
        let mask = evidenceContent(item);
        setContent(mask);
        setShow(!show);
        break;
      case "profile":
        let profile_mask = profileContent(item);
        setContent(profile_mask);
        setShow(!show);
        break;
      case "team":
        let team_mask = leaderboardProfiles(item);
        setContent(team_mask);
        setShow(!show);
        break;
      default:
        console.log("INVALID");
      break;
    }
  };
  const profileContent = (item) => {
  
    return (
      <article className="profile">
        <div className="header">
          <img src={`${BASE_URL}media/${item.avatar_url}`} alt="" />
          <div className="title">{item.title}</div>
        </div>
        <div className="info">{item.data}</div>
      </article>
    );
  };

  const evidenceContent = (item) => {
  
    return (
      <article className="evidence">
        <div className="heading">NOTES FROM THE KILLER</div>
        <div className="info">{item.killer_note}</div>
        <div className="heading">RIDDLE</div>
        <div className="info">{item.riddle}</div>
      </article>
    );
  };

  const leaderboardProfiles = (item) => {
    return (
      <article className="leader">
        <div className="team-logo">
          <img src={Skull} alt="" />
        </div>
        <div>Score : {item.score}</div>
        <div className="heading">{item.name}</div>
        <ul>
          {item.participant_array.map((item, index) => (
            <li className="player" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    );
  };

  return (
    <>
      <main className="list" onClick={handleClick}>
        <div className="title">
          {type==="team" && <div className="rank">{item.rank}</div> }
          {item.avatar_url && <img src={`${BASE_URL}media/${item.avatar_url}`} alt="" />}
          {item.title || (item.round_no &&`ROUND ${item.round_no}`) || item.name}
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
      </main>
      {show && <Modal content={content} setShow={() => setShow(!show)} />}
    </>
  );
};

export default List;
