CREATE TABLE rules (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (feature_id) REFERENCES features(id)
);