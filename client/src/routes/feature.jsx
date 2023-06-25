import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`/api/features/${params.featureId}`);
  const feature = await response.json();
  console.log(feature);
  return feature[0];
}

export default function Feature() {
  const feature = useLoaderData();
  
  return (
    <div id="feature">
      <h1>{feature.feature_title}</h1>
      <p id="valueStatement">{feature.value_statement}</p>
      <p>Rule: {feature.rule_title}</p>
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