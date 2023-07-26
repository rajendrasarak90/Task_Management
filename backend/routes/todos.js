const express = require("express");

const Todo = require("../models/Todo");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (err) {
    return res.status(500).json("Error in creating task", err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todoUpdated = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(todoUpdated);
  } catch (err) {
    return res.status(500).json("Error in updating task", err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todoDeleted = await Todo.findByIdAndDelete(id);
    return res.status(200).json(todoDeleted);
  } catch (err) {
    return res.status(500).json("Error in deleting task", err);
  }
});

module.exports = router;
