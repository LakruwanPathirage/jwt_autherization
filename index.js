const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

//import routes
const authRoute = require("./routes/auth");

//set middleware to routes
app.use("/api/user", authRoute);

//setting dotenv
env.config({ path: "./configurations/.env" });

mongoose.connect(process.env.DATABASE, () => {
  console.log("database connected");
});

//listen to port
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
