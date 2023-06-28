import "./SignIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="signin">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        id="landingLogo"
      />
      <div className="container">
        <h1 id="signinHeading">Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:3000/login", {
              email: email,
              password: password,
            });
          }}
        >
          <input
            type="email"
            placeholder="Email"
            id="signinEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <br />
          <input
            type="password"
            placeholder="Password"
            id="signinpassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Link to={"/browse"}>
            <button id="signinBtn">Sign In</button>
          </Link>
        </form>
      </div>
      {/* <div id="signinUp">
        <p>New to Netflix?</p>
        <h4>Sign up now</h4>
      </div> */}
    </section>
  );
}

export default SignIn;
