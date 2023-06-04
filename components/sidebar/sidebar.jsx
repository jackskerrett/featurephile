import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div id="sidebar">
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
