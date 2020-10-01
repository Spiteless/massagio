-- event_id	start_time	slots_per_hour	company_name
select s.slot_id, s.event_id, s.user_id, s,price  from company c
join event e on c.company_id = e.company_id
join slot s on s.event_id = e.event_id
where c.company_url_slug like $1;
