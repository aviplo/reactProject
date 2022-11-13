import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

const Login = () => {
  const nav = useNavigate();
  useEffect(() => {
    allUsers();
  }, []);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const allUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  async function checkUsersValidation() {
    let user = true;
    const users = await allUsers();
    user = users.find(
      (user_1) => user_1.username === userName &&
        user_1.address.geo.lat.slice(-4) === password
    );
    if (user) {
      const userJSON = JSON.stringify(user);
      localStorage.setItem("userObj", userJSON);
      nav("/");
    } else {
      setShow(true);
      return;
    }
  }

  console.log(show);
  return (
    <form>
      <h5>Log In</h5>
      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <br />
      <div className="row mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => checkUsersValidation()}
      >
        Log in
      </button>
      {show &&  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>oh no!</Alert.Heading>
        <p>
          please write your nam and password
          please try again
        </p>
      </Alert>}
    </form>
  );
};

export default Login;
