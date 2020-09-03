INSERT INTO posts
    (title, post_img, content, author_id)

VALUES
    ($1, $2, $3, $4)
RETURNING *;