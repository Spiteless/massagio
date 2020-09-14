-- event_id	start_time	slots_per_hour	company_name
select e.event_id, e.start_time, e.slots_per_hour, c.company_name from event e
join company c on c.company_id = e.company_id