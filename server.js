const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const logger = require("morgan");
const PORT = process.env.PORT || 5000;

const app = express();


//connect to mongoose
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//login request middleware
app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  


