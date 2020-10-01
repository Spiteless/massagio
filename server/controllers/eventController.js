module.exports = {
    createEvent: (req, res) => {
        //[ event_id	start_time	slots_per_hour	user_id	company_id ] 
        const db = req.app.get('db');
        const { company } = req.params
        const { companyId, lastName, profilePic } = req.body;
        console.log(userId, firstName, lastName, profilePic)
        const user = db.user_update_profile(userId, firstName, lastName, profilePic);
        console.log("updated user info:", user)
        res.sendStatus(200).send(user)
    },
    getAllEvents: async (req, res) => {
        console.log("Fired getAllEvents")
        const { companyUrlSlug } = req.params
        // console.log(companyUrlSlug)
        const db = req.app.get('db');
        // console.log(companyUrlSlug)
        try {
            const events = await db.event_company_get_all(companyUrlSlug);
            res.status(200).send(events)
        } catch (err) { console.log(err) }
        // console.log( `${company_url_slug} List:`, events)
    },
    getSlots: async (req, res) => {
        console.log("Fired getAllSlots")
        const { companyUrlSlug } = req.params
        const db = req.app.get('db');
        // console.log(companyUrlSlug)
        try {
            const events = await db.event_get_slots(companyUrlSlug);
            res.status(200).send(events)
        } catch (err) { console.log(err) }
    }
}