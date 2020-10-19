import React from "react";

import "./Input.css";

export default function Input({ task, handleTaskInput, handleFormSubmit }) {
  return (
    <form className="div2" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        required
        value={task}
        onChange={handleTaskInput}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}
