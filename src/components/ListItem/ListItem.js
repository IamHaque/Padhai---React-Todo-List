import React from "react";

import "./ListItem.css";

export default function ListItem({
  id,
  todo,
  completed,
  handleTaskDelete,
  handleTaskComplete,
}) {
  return (
    <div className={completed ? "div3-sub completed" : "div3-sub"}>
      <span className="tick-icon" onClick={(e) => handleTaskComplete(id)}>
        <i className={`far fa-${completed ? "times" : "check"}-circle`}></i>
      </span>

      <span className="todo-text">{todo}</span>

      <span className="delete-icon" onClick={(e) => handleTaskDelete(id)}>
        <i className="far fa-trash-alt"></i>
      </span>
    </div>
  );
}
