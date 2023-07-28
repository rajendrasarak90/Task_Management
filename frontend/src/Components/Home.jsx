import { useEffect, useState } from "react";
import axios from "axios";

import Todo from "./Todo";

export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/");
      // console.log(response.data);
      setTodos(response.data);
    } catch (err) {
      console.log("Error in fetching todos items", err);
    }
  };
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    try {
      await axios.post("/todos/create", {
        text,
        completed: false,
      });
      setTodos([...todos, { text, completed: false }]);
      setText("");
    } catch (err) {
      alert("error in task creation");
      console.log("error in creating task", err);
    }
  };

  const toggleCompleteTask = async (id) => {
    try {
      const todoUpdate = todos.find((todo) => todo._id === id);
      const response = await axios.put(`/todos/${id}`, {
        text: todoUpdate.text,
        completed: !todoUpdate.completed,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id
            ? { ...todo, completed: response.data.completed }
            : todo
        )
      );
    } catch (err) {
      console.log("Error in updating todo", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deletedTodo = await axios.delete(`/todos/${id}`);
      if (deletedTodo) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      }
    } catch (err) {
      console.error(`Failed to delete :`, err);
    }
  };

  return (
    <div className="App mt-4 ">
      <h1 className="text-secondary fs-3">Task List</h1>
      <div>
        <form
          className="mb-3 d-flex m-auto"
          style={{ height: "35px", width: "500px" }}
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Your todo task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </form>
        <div className="mt-4">
          {todos.map((todo, index) => {
            return (
              <Todo
                toggleCompleteTask={toggleCompleteTask}
                todo={todo}
                key={`todo-${index}`}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
