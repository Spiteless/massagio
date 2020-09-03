DROP TABLE if exists users cascade;
DROP TABLE if exists posts cascade;

CREATE TABLE users (
    user_id serial primary key,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts (
    post_id serial primary key,
    title VARCHAR(45),
    post_img text,
    content text,
    author_id int references users(user_id)
);

ALTER TABLE users ALTER COLUMN password TYPE text;

INSERT INTO users (username, password, profile_pic)
-- username: bob // password: bob
VALUES (
'q',
'$2b$10$zam2rTe0o9SWmfa2S7GhfO4sbL3wcPslFD1T8XfIn89vjVPbTc9iG',
'https://robohash.org/q'
)

