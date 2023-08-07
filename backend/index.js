const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 8000;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.BASE_URL,
  })
);
app.use(express.json());

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

app.get("/test", (req, res) => {
  return res.send("Server is running on port: 8000");
});
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log("Server is running on port", PORT);
});
