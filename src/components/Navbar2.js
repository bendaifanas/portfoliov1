import "../App.css";
import Footer from "./Footer";
function Navbar2() {
  return (
    <div>
      <nav>
        <div className="logo">
          <i className="fas fa-code"></i>
          <h4>ANAS BENDAIF</h4>
        </div>
        <ul className="navlinks">
          <li className="link">
            <a href="/">Home</a>
          </li>
          <li className="link">
            <a href="/about">about</a>
          </li>
          <li className="link">
            <a href="/contact">Contact me</a>
          </li>
          <li className="link">
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
