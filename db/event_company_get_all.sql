select e.event_id, e.start_time, e.slots_per_hour from company c
join event e on c.company_id = e.company_id
-- join users u on u.user_id = c.manager_id_1
where c.company_url_slug like 'wholefoods';
-- select * from users;
