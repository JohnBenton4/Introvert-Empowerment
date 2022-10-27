
const http = require("http");
var cors = require('cors')
const hostname = "127.0.0.1";
const port = 8000;
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Challenge, PickupLine, Conversation, User } = require('./models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const user = require("./models/user");
const db = require("./models");

app.use(cors())
app.use(express.json())


app.get('/challenges', async (req, res) => {
    const challenges = await Challenge.findAll();
    res.json(challenges);
});

app.get('/pickuplines', async (req, res) => {
    const pickuplines = await PickupLine.findAll();
    res.json(pickuplines);
});

app.get('/conversations', async (req, res) => {
    const conversations = await Conversation.findAll();
    res.json(conversations);
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


app.post('/login', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    const user = await db.User.findOne({
        where: {
            email: email
        }
    })
    console.log(user)

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        console.log(password)
        console.log(user.password)
        //generate the json web token
        if (!match) {
            //response with not authentiated
            
        return res.json({ success: false, message: 'Wrong password' })
        }
        else {
            const token = jwt.sign({ email: user.email }, 'SECRETKEY')
            const result = { success: true, token: token, userId: user.id }
            res.json(result)
            console.log(result.success)
        }
    
    } else {
        //response with not authentiated
        res.json({ success: false, message: 'Not a User' })
    }
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

