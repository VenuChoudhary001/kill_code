import React from "react";

import Navbar from "../../Components/Navbar";


const RULES = () => {
  
  const content = (
    <>
      <div className="heading">RULES</div>
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
 
  return (
    <>
      <Navbar />
      <section className="container">
        <main className="rules">{content}</main>
      </section>
    </>
  );
};

export default RULES;
