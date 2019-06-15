const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const User = require('./models/user');
const Post = require('./models/posts')
const schema = require('./schema/schema');

app.use(bodyParser.json());

app.listen(5000, () => console.log('Server is running on port 5000'));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);


mongoose 
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

