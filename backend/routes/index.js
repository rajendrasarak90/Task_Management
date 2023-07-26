const express = require("express");

const Todo = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json("Error in fetching todo's", err);
  }
});

router.use("/user", require("./user"));
router.use("/todos", require("./todos"));

module.exports = router;
