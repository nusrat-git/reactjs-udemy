import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select
            value={props.filterYear}
            onChange={(e) => props.setFilterYear(e.target.value)}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
