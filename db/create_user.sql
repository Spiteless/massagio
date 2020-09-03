INSERT INTO users (username, password, profile_pic)
VALUES
($1, $2, $3)
RETURNING *;