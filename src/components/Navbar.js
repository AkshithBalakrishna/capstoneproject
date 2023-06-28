import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section id="navBar">
      <nav>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          id="landingLogos"
        />
      </nav>
      <nav>
        <ul id="lists">
          <Link to={"/browse"} className="linkHome">
            <li className="items">
              <h6 className="navbarHeading">Home</h6>
            </li>{" "}
          </Link>
          <Link to={"/watchList"} className="linkHome">
            <li className="items">
              <h6 className="navbarHeading">Watch List</h6>
            </li>
          </Link>
        </ul>

        <div id="searchContainer">
          <input type="text" placeholder="Search" id="navbarSearch" />
          <button id="navbarBtn" type="button">
            Search
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
