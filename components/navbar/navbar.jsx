import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" id="logo"><h1>Featurephile</h1></Link>
    </div>
  );
}
