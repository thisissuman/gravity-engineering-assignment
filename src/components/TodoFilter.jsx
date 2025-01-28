import React from "react";

const TodoFilter = ({ getFiltred }) => {
  const filtets = ["all", "completed", "pending"];

  return (
    <div className="filter-container">
      {filtets.map((filter) => (
        <span
          className="filter-item"
          key={filter}
          onClick={() => getFiltred(filter)}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default TodoFilter;
