import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <header id="landingHeader">
      <section id="landingNavbar">
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            id="landingLogo"
          />
        </div>
        <div>
          <Link to={"/login"}>
            <button id="singinBtn">Sign In</button>
          </Link>
        </div>
      </section>

      <section id="landingContent">
        <h1 id="contentHeadingOne">Unlimited movies, TV shows and more</h1>
        <h4 id="contentHeadingTwo">Watch anywhere. Cancel anytime.</h4>
        <p id="contentParaOne">Ready to watch? Enter your email to create or</p>
        <p id="contentParaTwo">restart your membership.</p>
      </section>

      <sectiion id="landingLogin">
        <div id="landingEmailSec">
          <input type="email" placeholder="Email address" id="landingEmail" />
        </div>
        <div id="landingBtnSec">
          <Link to={"/signup"}>
            <button id="landingBtn">Get Started</button>
          </Link>
        </div>
      </sectiion>
    </header>
  );
}

export default LandingPage;
