import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

    const [selectedCategory, setSelectedCategory] = useState("All")
    const [tasks, setTasks] = useState(TASKS)


    const filteredTasks = selectedCategory === "All"
        ? tasks
        : tasks.filter((task) => task.category === selectedCategory)

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category)
    }

    const onTaskFormSubmit = (newTask) => {
        setTasks([...tasks, newTask])
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} selectedCategory={selectedCategory} setTaskList={setTasks}/>
      <TaskList setTaskList={setTasks} tasks={filteredTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
