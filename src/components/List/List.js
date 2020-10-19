import React from "react";

import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List({ tasks, handleTaskDelete, handleTaskComplete }) {
  return (
    <div className="div3">
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <ListItem
            id={task.id}
            key={task.id}
            todo={task.todo}
            completed={task.completed}
            handleTaskDelete={handleTaskDelete}
            handleTaskComplete={handleTaskComplete}
          />
        ))
      ) : (
        <div className="no-tasks">
          <span>
            <i className="fas fa-exclamation-circle"></i>
          </span>
          <span>No Todo Tasks</span>
        </div>
      )}
    </div>
  );
}
