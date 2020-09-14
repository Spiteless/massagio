UPDATE users 
SET
first_name = $2, last_name = $3, profile_pic = $4
where
user_id = $1
RETURNING *;

-- CREATE TABLE users
-- (
--     user_id serial PRIMARY KEY,
--     first_name VARCHAR(40),
--     last_name VARCHAR(40),
--     email VARCHAR(60) UNIQUE,
--     password text,
--     profile_pic text,
--     -- company_id int REFERENCES company (company_id),
--         -- added via alter table later:
--     admin BOOLEAN
-- );