const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local");

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
// mongodb+srv://rajendrasarak622:2FWW3BrZS2Q8pltl@cluster1.h8vxdpk.mongodb.net/?retryWrites=true&w=majority
// u8xTjx1yxERNa8fr

mongoose
  .connect(
    "mongodb+srv://rajendrasarak622:u8xTjx1yxERNa8fr@cluster0.7m57p01.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error in connecting to DB", err));

app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log("Server is running on port", PORT);
});
