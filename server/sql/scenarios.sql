CREATE TABLE scenarios (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rule_id INT NOT NULL,
    FOREIGN KEY (rule_id) REFERENCES rules(id)
);