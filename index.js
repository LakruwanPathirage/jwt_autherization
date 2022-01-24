const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

//setting dotenv
env.config({ path: "./configurations/.env" });

//import routes
const authRoute = require("./routes/loginAndRegisterRoutes/auth");
const postRoute = require("./routes/PrivateRoutes/postRoute");

//middlewares
app.use(express.json());
//set middleware to routes
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

mongoose.connect(process.env.DATABASE, () => {
  console.log("database connected");
});

//listen to port
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
