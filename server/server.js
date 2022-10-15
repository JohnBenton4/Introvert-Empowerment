const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const server = http.createServer(app);


const db = require('./models/challenges');


app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/challenges', (req, res) => {
    res.send('Hello from Challenges!');
});







server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
