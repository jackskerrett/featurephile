import "./sidebar.css"



export default function Sidebar(props) {
    return (
        <div id="sidebar">
            <h1>Featurephile</h1>
            <ul id="featureSelector">
                {props.features.map(feature => {
                    return <li><a>{feature}</a></li>
                })}
                
            </ul>
        </div>
    )
}