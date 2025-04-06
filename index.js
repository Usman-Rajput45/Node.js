const express = require("express");
const db = require("./db");  


const bodyParser = require("body-parser");
const { identity } = require("lodash");
require("dotenv").config();
const app = express();
//Import the person routes
const personRoutes = require('./routes/PersonRoutes');
//Import the menu routes
const menuRoutes = require('./routes/menuRoutes');
//InOrder to use it
app.use(bodyParser.json());
app.use('/person', personRoutes);
app.use('/menu', menuRoutes)



// 📌 Start Server
app.listen(3000, () => {
  console.log("Server is running at the port of 3000");
});
