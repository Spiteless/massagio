module.exports = {
    update:  (req, res) => {
        const db = req.app.get('db');  
        const {userId} = req.params
        const {firstName, lastName, profilePic} = req.body;
        console.log(userId, firstName, lastName, profilePic)
        const user = db.user_update_profile(userId, firstName, lastName, profilePic);
        console.log( "updated user info:", user)
        res.sendStatus(200).send(user)
    },
    viewProfile: (req, res) => {

    }
}