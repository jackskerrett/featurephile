const features = [
  {
    id: "f1",
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
  },
  {
    id: "f2",
    name: "Feature: Lick a dick",
    valueStatement: "Oh No!",
    rules: [
      {
        id: "r3",
        name: "Rule: I am a rule",
        scenarios: [
          {
            id: "sc3",
            name: "Scenario: This thing happened",
            steps: [
              {
                id: "sc3.1",
                text: "Given this thing",
              },
              {
                id: "sc3.2",
                text: "When this thing",
              },
              {
                id: "sc3.3",
                text: "Then this thing",
              },
            ],
          },
        ],
      },
      {
        id: "r4",
        name: "Rule: Rule 4",
        scenarios: [
          {
            id: "sc4",
            name: "Scenario: That thing happened",
            steps: [
              {
                id: "sc4.1",
                text: "Given that thing",
              },
              {
                id: "sc4.2",
                text: "When that thing",
              },
              {
                id: "sc4.3",
                text: "Then that thing",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "f3",
    name: "Feature: IT IS WORKING!",
    valueStatement: "Oh No!",
    rules: [
      {
        id: "r5",
        name: "Rule: I am a rule",
        scenarios: [
          {
            id: "sc5",
            name: "Scenario: Thisadasdhasdasdappened",
            steps: [
              {
                id: "sc5.1",
                text: "Given this thing",
              },
              {
                id: "sc5.2",
                text: "When this thing",
              },
              {
                id: "sc5.3",
                text: "Then this thing",
              },
            ],
          },
        ],
      },
      {
        id: "r6",
        name: "Rule: Rule 6",
        scenarios: [
          {
            id: "sc6",
            name: "Scenario: That thing happened",
            steps: [
              {
                id: "sc6.1",
                text: "Given that thing",
              },
              {
                id: "sc6.2",
                text: "When that thing",
              },
              {
                id: "sc6.3",
                text: "Then that thing",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getFeature(id) {
  return features.find((feature) => feature.id == id);
}

export function getAllFeatures() {
  let listOfFeatures = features.map((feature) => {
    return ({
      name: feature.name,
      id: feature.id,
    });
  });
  return listOfFeatures;
}
