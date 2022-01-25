import "./timer.scss";

function Timer() {
  return (
    <>
      <div className="timer">
        <div className="card">
          <div className="cardHead">
            <div className="labelsTime">
              <span>04</span>
              <span>45</span>
              <span>40</span>
              <span>05</span>
            </div>
            <div className="labels">
              <span>Days</span>
              <span>Hours</span>
              <span>Mins</span>
              <span>Secs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
