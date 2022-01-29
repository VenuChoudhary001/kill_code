import React, { useContext, useEffect, useState } from "react";
import STORE from "../Context/store";
import Skull from "../Assets/images/skull.png";
import Modal from "./Modal";

const List = ({ id, title, type, avatar,rank }) => {
  const { data } = useContext(STORE);
  const [content, setContent] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    switch (type) {
      case "evidence":
        let mask = evidenceContent(id);
        setContent(mask);
        setShow(!show);
        break;
      case "profile":
        let profile_mask = profileContent(id);
        setContent(profile_mask);
        setShow(!show);
        break;
      case "team":
        let team_mask = leaderboardProfiles(id);
        setContent(team_mask);
        setShow(!show);
        break;
    }
  };
  const profileContent = (id) => {
    let profile = data.profiles.find((item) => item.id == id);
    return (
      <article className="profile">
        <div className="header">
          <img src={profile.avatar_url} alt="" />
          <div className="title">{profile.name}</div>
        </div>
        <div className="info">{profile.bio}</div>
      </article>
    );
  };

  const evidenceContent = (id) => {
    let evi = data.evidence.find((item) => item.id == id);
    return (
      <article className="evidence">
        <div className="heading">NOTES FROM THE KILLER</div>
        <div className="info">{evi.note}</div>
        <div className="heading">RIDDLE</div>
        <div className="info">{evi.riddle}</div>
      </article>
    );
  };

  const leaderboardProfiles = (id) => {
    let team = data.leaderboard.find((item) => item.id == id);
    return (
      <article className="leader">
        <div className="team-logo">
          <img src={Skull} alt="" />
        </div>
        <div className="heading">{team.team}</div>
        <ul>
          {team.players.map((item, index) => (
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
          {type=="team" && <div className="rank">{rank}</div> }
          {avatar && <img src={avatar} alt="" />}
          {title}
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
