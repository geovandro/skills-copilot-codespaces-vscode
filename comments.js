// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse application/json
app.use(bodyParser.json());

// Create a variable to hold the comments
let comments = [];

// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST route that adds a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});