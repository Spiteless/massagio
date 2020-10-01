module.exports = {
    updateSlots: async (req, res) => {
        console.log("Fired updateSlot")
        const db = req.app.get('db');
        // console.log(companyUrlSlug)
        let values = [req.body.user_id, ...req.body.selectedSlots]
        console.log("values:", values)
        try {
            let lenNum = values.length - 1
            let slots
    if (lenNum === 1){ slots= await db.slot_update_1_users(values); }
    if (lenNum === 2){ slots= await db.slot_update_2_users(values); }
    if (lenNum === 3){ slots= await db.slot_update_3_users(values); }
    if (lenNum === 4){ slots= await db.slot_update_4_users(values); }
    if (lenNum === 5){ slots= await db.slot_update_5_users(values); }
            // const slots = await db.slot_update_1_user(values);
            res.status(200).send(slots)
        } catch (err) { console.log(err) }
    }
}