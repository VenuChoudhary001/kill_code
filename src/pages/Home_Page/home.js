import "./home.scss";

function Home() {
  return (
    <>
      <div className="homePage">
        <div className="text">
          <div className="killcode">KILLCODE</div>
          <div className="killing">THE KILLING BEGINS ON 1ST FEBRUARY</div>
        </div>
        <div className="buttonWrapper">
          <div className="button">
            <a href="/">
              <p>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Register</span>
              </p>
            </a>
            <a className="white" href="/">
              <p>
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Log in</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
