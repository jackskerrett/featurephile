import "./sidebar.css"
import { Link } from "react-router-dom";



export default function Sidebar(props) {

    return (
        <div id="sidebar">
            <h1>Featurephile</h1>
            <ul id="featureSelector">
                {props.features.map(feature => {
                    return <li key={feature.id}><Link to={`/features/${feature.id}`}>{feature.name}</Link></li>
                })}
                
            </ul>
        </div>
    )
}