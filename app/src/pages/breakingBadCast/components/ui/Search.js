import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (q) => {
    setText(q);
    getQuery(q.toLowerCase());
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search characters"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
