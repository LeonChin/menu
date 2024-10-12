import React from "react";

function Categories({ categories, filterMenu }) {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            key={category}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
