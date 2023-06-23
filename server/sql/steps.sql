CREATE TABLE steps (
    id SERIAL PRIMARY KEY,
    step VARCHAR(255),
    scenario_id INT NOT NULL,
    FOREIGN KEY (scenario_id) REFERENCES scenarios(id)
);