const feature = {
  name: "Feature: Suck a dick",
  valueStatement: "As a, I want, so that",
  rules: [
    {
      id: "r1",
      name: "Rule: I am a rule",
      scenarios: [
        {
          id: "sc1",
          name: "Scenario: This thing happened",
          steps: [
            {
              id: "sc1.1",
              text: "Given this thing",
            },
            {
              id: "sc1.2",
              text: "When this thing",
            },
            {
              id: "sc1.3",
              text: "Then this thing",
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      name: "Rule: Rule 2",
      scenarios: [
        {
          id: "sc2",
          name: "Scenario: That thing happened",
          steps: [
            {
              id: "sc2.1",
              text: "Given that thing",
            },
            {
              id: "sc2.2",
              text: "When that thing",
            },
            {
              id: "sc2.3",
              text: "Then that thing",
            },
          ],
        },
      ],
    },
  ],
};

export function getFeature() {
  return feature;
}
