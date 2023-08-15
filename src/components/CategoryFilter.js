import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {

    const showCategoryButtons = categories.map((category, index) => (
         <button
            key={index}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => onSelectedCategory(category)}>
            {category}
        </button>
    ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {showCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
