import React from "react";

function CategoryFilter({ categories, handleClick, categoryA }) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button key={index}
        className={category === categoryA ? "selected" : ""}
        onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;
