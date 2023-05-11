import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div id="sidebar">
      <div id="title">
        <Link id="heading" to="/"><h1><strong>Feature</strong>phile</h1></Link>
      </div>
      <ul id="feature-selector">
        {props.features.map((feature) => {
          return (
            <li key={feature.id}>
              <Link id="feature-link" to={`/features/${feature.id}`}>
                {feature.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
