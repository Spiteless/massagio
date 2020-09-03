select p.title, u.username, p.author_id, p.post_id from posts p
join users u on u.user_id = p.author_id
;
