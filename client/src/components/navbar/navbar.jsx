import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <h1><Link to="/">Featurephile</Link></h1>
    </div>
  );
}
