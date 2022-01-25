import "./registration.scss";

function Registration() {
  return (
    <div className="reg-page">
      <div className="card">
        <div className="cardHead">REGISTRATION</div>
        <form>
          <label>
            <div className="name">Team Name:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Password :</div>
            <input type="password" name="password" />
          </label>
          <label>
            <div className="name">Member 1:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Email ID:</div>
            <input type="email" name="email" />
          </label>
          <label>
            <div className="name">Member 2:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Email ID:</div>
            <input type="email" name="email" />
          </label>
          <label>
            <div className="name">Member 3:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Email ID:</div>
            <input type="email" name="email" />
          </label>
          <label>
            <div className="name">Member 4:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Email ID:</div>
            <input type="text" name="email" />
          </label>
          <label>
            <div className="name">Member 5:</div>
            <input type="text" name="name" />
          </label>
          <label>
            <div className="name">Email ID:</div>
            <input type="email" name="email" />
          </label>
          <div className="registerButton">Submit</div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
