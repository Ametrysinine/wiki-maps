DROP TABLE users CASCADE;
DROP TABLE maps CASCADE;
DROP TABLE favorited_maps CASCADE;
DROP TABLE pins CASCADE;
DROP TABLE images CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_photo VARCHAR(255),
  profile_description TEXT
);

CREATE TABLE maps (
  id SERIAL PRIMARY KEY,
  creator_id INTEGER REFERENCES users(id) NOT NULL,
  name VARCHAR(255),
  description TEXT
);

CREATE TABLE favorited_maps (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);

CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  x_coordinate DECIMAL(9,6) NOT NULL,
  y_coordinate DECIMAL(9,6) NOT NULL,
  title VARCHAR(255),
  description TEXT
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  pin_id INTEGER REFERENCES pins(id) ON DELETE CASCADE,
  image_url VARCHAR(255) NOT NULL,
  description TEXT,
  is_thumbnail BOOLEAN DEFAULT FALSE
);