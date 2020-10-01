require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()

//controllers
const auth = require('./controllers/authController');
const user = require('./controllers/userController');
const event = require('./controllers/eventController');
const slot = require('./controllers/slotController');
const admin = require('./controllers/adminController');


const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 48}, //2 days
    secret: SESSION_SECRET,
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db')
}).catch( err => console.log(err))

//endpoints
// auth
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.get('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)
// user
app.get('/user/:userId', user.viewProfile)
app.put('/user/:userId', user.update)
//event
app.post('/:companyName/', event.createEvent)
app.get('/:companyUrlSlug/', event.getAllEvents)
app.get('/:companyUrlSlug/slots', event.getSlots)
//slot
app.put('/update-slots', slot.updateSlots)
//admin
app.get('/admin/companylist', admin.getCompanyList)

//
app.listen(SERVER_PORT, () => console.log(`Conncted to server on ${SERVER_PORT}`))

