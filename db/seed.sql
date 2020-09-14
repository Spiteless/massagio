DROP TABLE if exists users cascade;
DROP TABLE if exists event cascade;
DROP TABLE if exists company cascade;
DROP TABLE if exists cart cascade;
DROP TABLE if exists slot cascade;

CREATE TABLE users
(
    user_id serial PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email VARCHAR(60) UNIQUE,
    password text,
    profile_pic text,
    -- company_id int REFERENCES company (company_id),
        -- added via alter table later:
    admin BOOLEAN
);

CREATE TABLE company
(
    company_id serial PRIMARY KEY,
    company_name varchar(80),
    manager_id_1 INT REFERENCES users (user_id),
    manager_id_2 INT REFERENCES users (user_id),
    manager_id_3 INT REFERENCES users (user_id)
);

ALTER TABLE users
ADD company_id int REFERENCES company (company_id);


CREATE TABLE event
(
    event_id serial PRIMARY KEY,
    start_time text,
    slots_per_hour int,
    user_id int REFERENCES users (user_id),
    company_id int REFERENCES company (company_id)
);



CREATE TABLE cart
(
    cart_id serial PRIMARY KEY,
    user_id int REFERENCES users (user_id)
);

CREATE TABLE slot
(
    slot_id serial PRIMARY KEY,
    event_id int REFERENCES event (event_id),
    user_id int REFERENCES users (user_id),
    company_id int REFERENCES company (company_id),
    cart_id int REFERENCES cart (cart_id),
    price float
);

select * from users;
select * from company;
select * from event;
select * from slot;
select * from cart;

INSERT INTO users
    (email, password, profile_pic)
-- username: bob // password: bob
VALUES
    (
        'q@q.q',
        '$2b$10$zam2rTe0o9SWmfa2S7GhfO4sbL3wcPslFD1T8XfIn89vjVPbTc9iG',
        'https://robohash.org/q'
)