import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const feature = "test";
  return feature;
}

export default function Feature() {
  const feature = useLoaderData();
  
  return (
    <div id="feature">
      <h1>{feature.name}</h1>
      <p id="valueStatement">{feature.valueStatement}</p>
      <p>{feature}</p>
    </div>
  );
};


//<div>
//{feature.rules.map(rule => {
//  return <div className="rule" key={rule.id}><h2>{rule.name}</h2><div>{rule.scenarios.map(scenario => {
//    return <div className="scenario" key={scenario.id}><h3>{scenario.name}</h3><ul>{scenario.steps.map(step => {
//      return <li className="step" key={step.id}>{step.text}</li>
//    })}</ul></div>
//  })}</div></div>
//})}
//</div>