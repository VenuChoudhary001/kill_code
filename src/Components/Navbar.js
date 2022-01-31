import React, { useContext, useEffect, useState } from "react";
import HEADER from "../Layout/header";
import { useNavigate } from "react-router-dom";
import STORE from "../Context/store";
import Modal from "./Modal";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showModal,setShowModal]=useState(false);
  const { active, setActive } = useContext(STORE);
  const navigate = useNavigate();
  let navItem = [
    "game",
    "evidence",
    "profiles",
    "locations",
    "rules",
    "leaderboard",
    "kill code"
  ];

  const rulesContent = (
    <>
      <div className="rules-heading">RULES</div>
      <ul className="rules-list">
        <div className="list-item">
          1. KILLCODE II starts at 6:00 pm on February 1st, 2022. The event
          consists of 9 rounds, played over two days. Four rounds will be held
          on February 1st, and the remaining five rounds on February 2nd.
        </div>
        <div className="list-item">
          2. All 9 rounds are timed. Once the timer for each round runs out, you
          cannot answer that round anymore. Regardless of whether you have
          attempted that round or not, you must move on to the next round.
        </div>
        <div className="list-item">
          3. Rounds 1 to 8 consist of 45 minutes each, with a 15 minute break
          between two consecutive rounds. Round 9 consists of only 30 minutes.
        </div>
        <div className="list-item">
          4. Thus, schedule for Day 1: Round 1 : 6:00 pm - 6:45 pm ; Results :
          6:45 pm to 7:00 pm Round 2 : 7:00 pm - 7:45 pm ; Results : 7:45 pm to
          8:00 pm Round 3 : 8:00 pm - 8:45 pm ; Results : 8:45 pm to 9:00 pm
          Round 4 : 9:00 pm - 9:45 pm ; Results : 9:45 pm to 10:00 pm
        </div>
        <div className="list-item">
          5. Similarly, schedule for Day 2: Round 5 : 6:00 pm - 6:45 pm ;
          Results : 6:45 pm to 7:00 pm Round 6 : 7:00 pm - 7:45 pm ; Results :
          7:45 pm to 8:00 pm Round 7 : 8:00 pm - 8:45 pm ; Results : 8:45 pm to
          9:00 pm Round 8 : 9:00 pm - 9:45 pm ; Results : 9:45 pm to 10:00 pm
          Round 9 : 10:00 pm - 10:30 pm : This round is exclusively to guess the
          killcode, and requires only one answer.
        </div>
        <div className="list-item">
          6. Each team gets a total of 2 attempts every round. An attempt
          consists of both answers that the round requires. If you are not sure
          about both answers, you may leave one blank, but there are no
          penalties for a wrong answer in-round. However, only your last attempt
          in each round will be considered, regardless of whether or not your
          previous answer was correct. Answers are not case-sensitive.
        </div>
        <div className="list-item">
          7. Each round has different scores as the rounds progress. There is
          partial marking if you get only one of the answers correct, which is
          half the points for that respective round. There is no partial marking
          in Round 9. Round 1 - 10 points Round 2 - 20 points Round 3 - 30
          points Round 4 - 40 points Round 5 - 60 points Round 6 - 80 points
          Round 7 - 100 points Round 8 - 120 points Round 9 - 600 points
        </div>
        <div className="list-item">
          8. However, you are free to attempt the killcode during any round in
          the game. A correct attempt gives you 600 points right then and there,
          and the game freezes and de facto, you win; i.e. identifying the
          correct killcode identifies the killer and freezes the leaderboard
          instantly. However, every wrong attempt costs a penalty, which is half
          the number of points in that specific round in which the attempt has
          been made. Round 9, which is exclusively for guessing the killcode has
          no penalties for any wrong attempts
        </div>{" "}
        <div className="list-item">
          9. The map provided to you in-game is not to scale, and entirely
          fictitious. It is a map given to you by the killer.
        </div>
        <div className="list-item">
          10. All the evidence gathered in previous rounds will be accessible
          even after the timer for those rounds have run out under the Evidence
          Tab. At any point in the game, you are free to access evidence from a
          previous round.
        </div>
        <div className="list-item">
          10. All the evidence gathered in previous rounds will be accessible
          even after the timer for those rounds have run out under the Evidence
          Tab. At any point in the game, you are free to access evidence from a
          previous round.
        </div>
      </ul>
    </>
  );
  
  

  const handleClick = async (e) => {
    switch (e.target.ariaLabel) {
      case "game":
        setActive(0);
        navigate("/game", { replace: true });
        break;
      case "evidence":
        setActive(1);

        navigate("/evidence", { replace: true });
        break;
      case "profiles":
        setActive(2);

        navigate("/profiles", { replace: true });
        break;

      case "locations":
        setActive(3);

        navigate("/locations", { replace: true });
        break;
      case "rules":
         setShowModal(true);
        break;
      case "leaderboard":
        setActive(5);
        navigate("/leaderboard", { replace: true });
        break;
      case "kill code":
         setActive(6);
         navigate("/killcode",{replace:true});
        break;
      default:
        console.log("INVALID");
        break;
    }
  };

  /* eslint-disable */
  useEffect(() => {
    switch (window.location.pathname) {
      case "/game":
        setActive(0);
        break;
      case "/evidence":
        setActive(1);

        break;
      case "/profiles":
        setActive(2);
        break;

      case "/locations":
        setActive(3);

        break;
      case "/leaderboard":
        setActive(5);

        break;
        case "/killcode":
         setActive(6);
        break;
      default:
        console.log("INVALID");
        break;
    }
  }, []);
  const navContent = (
    <div className="nav-menu">
      {navItem.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${index == active && "active"}`}
          aria-label={item}
          onClick={handleClick}
        >
          {item}
        </div>
      ))}
    </div>
  );
  /* eslint-disable */

  return (
    <>
      <section className="nav">
        <div className="brand-name">
          <HEADER />
        </div>
        {navContent}
      </section>
      <section className="nav-mob">
        {!show && (
          <div className="ham">
            <svg
              onClick={() => setShow(!show)}
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83398 8.75033C5.83398 8.36355 5.98763 7.99262 6.26112 7.71913C6.53461 7.44564 6.90554 7.29199 7.29232 7.29199H27.709C28.0958 7.29199 28.4667 7.44564 28.7402 7.71913C29.0137 7.99262 29.1673 8.36355 29.1673 8.75033C29.1673 9.1371 29.0137 9.50803 28.7402 9.78152C28.4667 10.055 28.0958 10.2087 27.709 10.2087H7.29232C6.90554 10.2087 6.53461 10.055 6.26112 9.78152C5.98763 9.50803 5.83398 9.1371 5.83398 8.75033Z"
                fill="white"
              />
              <path
                d="M5.83398 26.2503C5.83398 25.8636 5.98763 25.4926 6.26112 25.2191C6.53461 24.9456 6.90554 24.792 7.29232 24.792H27.709C28.0958 24.792 28.4667 24.9456 28.7402 25.2191C29.0137 25.4926 29.1673 25.8636 29.1673 26.2503C29.1673 26.6371 29.0137 27.008 28.7402 27.2815C28.4667 27.555 28.0958 27.7087 27.709 27.7087H7.29232C6.90554 27.7087 6.53461 27.555 6.26112 27.2815C5.98763 27.008 5.83398 26.6371 5.83398 26.2503Z"
                fill="white"
              />
              <path
                d="M16.0423 16.042C15.6555 16.042 15.2846 16.1956 15.0111 16.4691C14.7376 16.7426 14.584 17.1136 14.584 17.5003C14.584 17.8871 14.7376 18.258 15.0111 18.5315C15.2846 18.805 15.6555 18.9587 16.0423 18.9587H27.709C28.0958 18.9587 28.4667 18.805 28.7402 18.5315C29.0137 18.258 29.1673 17.8871 29.1673 17.5003C29.1673 17.1136 29.0137 16.7426 28.7402 16.4691C28.4667 16.1956 28.0958 16.042 27.709 16.042H16.0423Z"
                fill="white"
              />
            </svg>
          </div>
        )}
        {show && (
          <>
            <main className="side-bar">
              <div className="back">
                <svg
                  onClick={() => setShow(!show)}
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.92788 8.40395L0.832031 9.4998L9.60038 18.2681L11.7921 16.0764L5.21698 9.4998L11.7921 2.92315L9.60038 0.731445L1.92788 8.40395Z"
                    fill="white"
                  />
                </svg>
              </div>
              {navContent}
            </main>
          </>
        )}
      </section>
      {showModal && <Modal content={rulesContent} setShow={()=>setShowModal(false)} />}
    </>
  );
};

export default Navbar;
