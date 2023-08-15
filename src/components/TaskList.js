import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTaskList }) {

    function handleDeleteTask(taskText) {
        const updatedTaskList = tasks.filter((task) => task.text !== taskText)
        setTaskList(updatedTaskList)
    }

    // const filteredTasks = selectedCategory === "All"
    //     ? tasks
    //     : tasks.filter((task) => task.category === selectedCategory)

    const updatedTasks = tasks.map((task, index) => {
        return <Task key={index} text={task.text} category={task.category} onDelete={handleDeleteTask} />
    })

  return (
    <div className="tasks">
        <ul>{updatedTasks}</ul>
    </div>
  );
}

export default TaskList;
