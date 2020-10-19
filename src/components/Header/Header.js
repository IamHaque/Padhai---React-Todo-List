import React, { useState, useEffect } from "react";

import "./Header.css";

export default function Header({
  activeTab,
  filterAll,
  activeTasks,
  filterComplete,
  filterIncomplete,
}) {
  const [day, setDay] = useState("");

  useEffect(() => {
    const [weekday, date] = new Date()
      .toLocaleTimeString("en-us", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
      .split(",");
    setDay(`${weekday},${date}`);
  }, [day]);

  return (
    <div className="div1">
      <div className="div1-left">
        <span className="date">{day}</span>
        <span className="active-tasks"> {activeTasks} Active Tasks </span>
      </div>

      <div className="div1-right">
        <span className={activeTab === 1 ? "active" : ""} onClick={filterAll}>
          All Tasks
        </span>

        <span
          className={activeTab === 2 ? "active" : ""}
          onClick={filterIncomplete}
        >
          Incomplete Tasks
        </span>

        <span
          className={activeTab === 3 ? "active" : ""}
          onClick={filterComplete}
        >
          Completed Tasks
        </span>
      </div>
    </div>
  );
}
