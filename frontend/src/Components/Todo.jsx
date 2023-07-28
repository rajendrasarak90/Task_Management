import React from "react";

export default function Todo(props) {
  const { toggleCompleteTask, todo, handleDelete } = props;
  return (
    <div
      className="d-flex justify-content-between mb-3 m-auto"
      style={{ maxWidth: "500px" }}
    >
      <input
        style={{
          width: "21px",
        }}
        checked={todo.completed}
        type="checkbox"
        onChange={() => toggleCompleteTask(todo._id)}
      />
      <p
        className="fs-4 text-secondory"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}{" "}
      </p>
      <button
        className="btn btn-danger "
        onClick={() => handleDelete(todo._id)}
        style={{ height: "41px" }}
      >
        Delete
      </button>
    </div>
  );
}
