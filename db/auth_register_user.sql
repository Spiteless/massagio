INSERT INTO users (email, password, profile_pic)
VALUES
($1, $2, $3)
RETURNING *;