CREATE TABLE scenarios (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (rule_id) REFERENCES rules(id)
);