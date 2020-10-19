import React, { useState, useEffect } from "react";
import simpleid from "simpleid";

import Header from "./Header/Header";
import Input from "./Input/Input";
import List from "./List/List";

const LS_KEY = "padhai-project-todo-list";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Sets state with Local Storage Tasks
  useEffect(() => {
    let ls_tasks = localStorage.getItem(LS_KEY);

    if (ls_tasks) {
      ls_tasks = JSON.parse(ls_tasks);
      setTasks([...ls_tasks]);
    } else {
      localStorage.setItem(LS_KEY, JSON.stringify([]));
    }
  }, []);

  // Updates local storage tasks with local state
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));

    if (activeTab === 2) {
      const incompleteTasks = tasks.filter((task) => task.completed === false);
      setFilteredTasks(incompleteTasks);
    } else if (activeTab === 3) {
      const completeTasks = tasks.filter((task) => task.completed === true);
      setFilteredTasks(completeTasks);
    } else {
      setFilteredTasks([...tasks]);
    }
  }, [tasks, activeTab]);

  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTask = {
      id: simpleid(),
      todo: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleTaskComplete = (taskId) => {
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        completed: task.id !== taskId ? task.completed : !task.completed,
      };
    });
    setTasks(newTasks);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const getActiveTasks = () => {
    return filteredTasks.filter((task) => !task.completed).length;
  };

  const filterAll = () => {
    if (activeTab === 1) return;

    setActiveTab(1);
    setFilteredTasks([...tasks]);
  };

  const filterIncomplete = () => {
    if (activeTab === 2) return;

    setActiveTab(2);
    const incompleteTasks = tasks.filter((task) => task.completed === false);
    setFilteredTasks(incompleteTasks);
  };

  const filterComplete = () => {
    if (activeTab === 3) return;

    setActiveTab(3);
    const completeTasks = tasks.filter((task) => task.completed === true);
    setFilteredTasks(completeTasks);
  };

  return (
    <>
      <Header
        activeTab={activeTab}
        filterAll={filterAll}
        activeTasks={getActiveTasks()}
        filterComplete={filterComplete}
        filterIncomplete={filterIncomplete}
      />

      <Input
        task={task}
        handleTaskInput={handleTaskInput}
        handleFormSubmit={handleFormSubmit}
      />

      <List
        tasks={filteredTasks}
        handleTaskDelete={handleTaskDelete}
        handleTaskComplete={handleTaskComplete}
      />
    </>
  );
};

export default App;
