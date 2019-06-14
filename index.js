const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Ciao Mondo"));

app.listen(5000, () => console.log('Server is running on port 5000'));

