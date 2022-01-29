import React, { useContext } from "react";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import SubNav from "../../Components/SubNav";
import STORE from "../../Context/store";

const LEADERBOARD = () => {
  const { data } = useContext(STORE);
  return (
    <>
      <Navbar />
      <SubNav />
      <section className="container">
          <main className="leaderboard">
        {data.leaderboard && data.leaderboard.map((item, index) => (<>
            <List key={index} 
            title={item.team}
            id={item.id}
            type="team" 
            rank={item.rank}
            />
            </>
            ))}

          </main>
      </section>
    </>
  );
};

export default LEADERBOARD;
