DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

-- Connect to the newly created database
\c user_db;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);