module.exports = {
    createEvent:  (req, res) => {
        //[ event_id	start_time	slots_per_hour	user_id	company_id ] 
        const db = req.app.get('db');  
        const {userId} = req.params
        const {firstName, lastName, profilePic} = req.body;
        console.log(userId, firstName, lastName, profilePic)
        const user = db.user_update_profile(userId, firstName, lastName, profilePic);
        console.log( "updated user info:", user)
        res.sendStatus(200).send(user)
    },
    getAllEvents: (req, res) => {

    }
}