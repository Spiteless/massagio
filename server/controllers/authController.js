const bcrypt = require('bcrypt');

module.exports = {
    //check if user/pass succeed, if yes pass
    //session object to frontend
    login: async (req, res) => {
        console.log('Fired Login', req.body)
        const db = req.app.get('db');
        const {email, password} = req.body;
        const user = await db.auth_check_user(email);
        if(!user[0]){
            console.log("returned 401")
            return res.status(401).send('Incorrect credentials');
        } else {
           const authenticated = bcrypt.compareSync(password, user[0].password);
           if(authenticated){
               req.session.user = {
                   userId: user[0].user_id,
                   email: user[0].email,
                   profilePic: user[0].profile_pic,
                   firstName: user[0].first_name,
                   lastName: user[0].last_name,
                   isAdmin: user[0].admin,
                   managerId: user[0].admin,
                   companyId: user[0].company_id,

                //    user: user[0]
               }
               res.status(200).send(req.session.user)
           } else {
               console.log("returned 403")
               res.status(403).send('Email or password incorrect')
           }
        }
    },
    //check if user exists in db
    //if not, create user and login
    register: async (req, res) => {
        console.log('Fired Register', req.body)
        const db = req.app.get('db');
        const {email, password} = req.body;
        const profile_pic = `https://robohash.org/` + email
        const existingUser = await db.auth_check_user(email);
        if(existingUser[0]){
            return res.status(409).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.auth_register_user([email, hash, profile_pic])
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            profilePic: newUser.profile_pic,
        }
        res.status(200).send(req.session.user)
    },
    //on logout, destroy session object
    logout: (req, res) => {
        console.log('Fired Logout')
        req.session.destroy();
        res.sendStatus(200);
    },
    //if user is still logged in, pass that to frontend
    getUser: (req, res) => {
        console.log('Fired GetUser', req.session.user.firstName)
        if(req.session.user){
            // console.log("getUser", req.session.user)
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}   