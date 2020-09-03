-- select * from posts

select p.title, p.author_id, u.username from posts p
join users u on u.user_id = p.author_id
;
