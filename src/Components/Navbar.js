import React, { useContext, useEffect, useState } from "react";
import HEADER from "../Layout/header";
import { useNavigate} from "react-router-dom";
import STORE from "../Context/store";
const Navbar = () => {
  const [show, setShow] = useState(false);
const {active,setActive}=useContext(STORE);
  const navigate = useNavigate();
  let navItem = [
    "game",
    "evidence",
    "profiles",
    "locations",
    "rules",
    "leaderboard",
  ];
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
        setActive(4);

        navigate("/rules", { replace: true });
        break;
      case "leaderboard":
        setActive(5);
        navigate('/leaderboard',{replace:true});
        break;
      default:
        console.log("INVALID");
        break;
    }
  };

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
  useEffect(() => {}, []);

  return (
    <>
      <section className="nav">
        <div className="brand-name">
          <HEADER/>
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
    </>
  );
};

export default Navbar;
