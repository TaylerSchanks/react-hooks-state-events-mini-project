import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

    const [text, setText] = useState("")
    const [category, setCategory] = useState("Code")


    const displayCategoryOption = categories.map((c, index) => (
        c !== "All" ? (
        <option key={index} value={c}>
            {c}
        </option>
        ) : null
    ))

    function handleSubmit(e) {
        console.log(category, text)
        e.preventDefault()
        const newTask = {
            text,
            category,
        }
        onTaskFormSubmit(newTask)
        setText("")
    }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            {displayCategoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
