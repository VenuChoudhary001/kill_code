import React,{useEffect , useState} from 'react';

const Timer = ({date}) => {
    const [clock, setClock] = useState("00000000");
    /* eslint-disable */
    useEffect(() => {
      let myInterval = setInterval(() => {
        const getCountdown = async () => {
          var current_date = new Date().getTime();
          let tf = new Date(
           date
          );
          var target_date = tf.getTime();
          var days, hours, minutes, seconds;

          // find the amount of "seconds" between now and target
          var seconds_left = (target_date - current_date) / 1000;

          days = pad(parseInt(seconds_left / 86400));
          seconds_left = seconds_left % 86400;

          hours = pad(parseInt(seconds_left / 3600));
          seconds_left = seconds_left % 3600;

          minutes = pad(parseInt(seconds_left / 60));
          seconds = pad(parseInt(seconds_left % 60));

          // format countdown string + set tag value
          const html = [days, hours, +minutes, +seconds];
          setClock(html);
        };

        function pad(n) {
          return n;
        }

        getCountdown();
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }, []);
  return (
    <>
      <main className="timerr">
        <div className="time">
          <span className="data">
            {clock[0] < 10 ? `0${clock[0]}` : clock[0]}
          </span>
          <span className="label">DAYS</span>
        </div>
        <div className="time">
          <span className="data">
            {clock[1] < 10 ? `0${clock[1]}` : clock[1]}
          </span>
          <span className="label">HOURS</span>
        </div>{" "}
        <div className="time">
          <span className="data">
            {clock[2] < 10 ? `0${clock[2]}` : clock[2]}
          </span>
          <span className="label">MINUTES</span>
        </div>{" "}
        <div className="time">
          <span className="data">
            {clock[3] < 10 ? `0${clock[3]}` : clock[3]}
          </span>
          <span className="label">SECONDS</span>
        </div>
      </main>
    </>
  );
};

export default Timer;
