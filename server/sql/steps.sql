CREATE TABLE steps (
    id SERIAL PRIMARY KEY,
    step VARCHAR(255),
    FOREIGN KEY (scenario_id) REFERENCES scenarios(id)
);