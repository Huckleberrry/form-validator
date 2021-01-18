// Entry point for our back-end
const express = require("express");
const connectDB = require('./config/db');



const app = express();

// Connect DataBase
connectDB();





// init express into variable called APP


// Init Middleware
app.use(express.json({extended: false}));
// add a route
// send data ( use postman to make get,post,& request - good for testing)
// you can also add an http link in res.send as a string
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

// Define our routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// port variable
// env = enviorment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


