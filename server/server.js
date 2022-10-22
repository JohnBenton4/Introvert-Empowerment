const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const express = require("express");
const app = express();

const server = http.createServer(app);


const {Challenge, PickupLine, Conversation, User} = require('./models');
const user = require("./models/user");
const jwt = require('jsonwebtoken');


// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: { email },
        });

        bcrypt.compare(password, user.password, (err, match) => {
            if (match) {
                const token = jwt.sign(
                    {userId: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h',
                    }
                );

                res.json({ message: 'success', token, userId: user.is});
            } else {

            }
        });
    } catch {
        res.json({ message: 'failure' });
    }
}),


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
