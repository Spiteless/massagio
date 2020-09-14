INSERT INTO posts
    -- start_time	slots_per_hour	user_id	company_id
    (title, post_img, content, author_id)

VALUES
    ($1, $2, $3, $4)
RETURNING *;