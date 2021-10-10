const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const cors = require('cors');

// lAICAQlm1mhBaOJk

mongoose.connect('mongodb+srv://root:lAICAQlm1mhBaOJk@cluster0.e3rzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
}
  
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(routes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});