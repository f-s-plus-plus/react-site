//node.js import statements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


//initializes express
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build')));

//gets the home page file (uses production build of the front end react app)
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//port
const port = 80;

//starts sever
app.listen(port, () => console.log("SERVER STARTED SUCCESSFULLY ON PORT " + port));
