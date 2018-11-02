const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('${__dirname}/../my-app/build'));

const path = require('path');
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
})

const port = 802;
app.listen(port, () => console.log("SERVER STARTED SUCCESSFULLY ON PORT " + port));
