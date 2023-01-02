import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <section className="search">
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </section>
    </div>
  );
};

export default Search;
