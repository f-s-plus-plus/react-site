const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('${__dirname}/../client/build'));

const path = require('path');
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

const port = 80;
app.listen(port, () => console.log("SERVER STARTED SUCCESSFULLY ON PORT " + port));
