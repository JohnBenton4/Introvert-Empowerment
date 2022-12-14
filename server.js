const PORT = process.env.PORT ?? 8080;
const user = require("./models/user");
const bcrypt = require('bcrypt');
const db = require("./models");
const jwt = require('jsonwebtoken');

const http = require("http");
const cors = require("cors");
const express = require("express");
const { Challenge, PickupLine, Conversation, User, sequelize } = require("./models");
const path = require('path');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(`${__dirname}/client/build`)));

//authenticate will run and if it passes the test it will finally go to the function

server.get("/challenges", async (req, res) => {
  const challenges = await Challenge.findAll();
  res.json(challenges);
});

server.get("/pickuplines", async (req, res) => {
  const pickuplines = await PickupLine.findAll();
  res.json(pickuplines);
});

server.get("/conversations", async (req, res) => {
  const conversations = await Conversation.findAll();
  res.json(conversations);
});

server.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

server.post('/login', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    const user = await db.User.findOne({
        where: {
            email: email
        }
    })

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        //generate the json web token
        if (!match) {
            //response with not authenticated

        return res.json({ success: false, message: 'Wrong password' })
        }
        else {
            const token = jwt.sign({ email: user.email }, 'SECRETKEY')
            const result = { success: true, token: token, userId: user.id }
            res.json(result)
        }

    } else {
        //response with not authenticated
        res.json({ success: false, message: 'Not a User' })
    }
});

server.get("*", (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/client/build/index.html`));
  });

server.listen(PORT, function(){
    console.log(`The server is listening at ${PORT}.`);
  });




