update slot 
set
user_id = $1
where slot_id in ($2,$3,$4,$5);
select * from slot where slot_id in ($2,$3,$4,$5);