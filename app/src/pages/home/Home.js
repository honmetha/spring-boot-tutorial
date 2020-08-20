import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to="/todolist">Todo List</Link>
          </li>
          <li>
            <Link to="/expensetracker">Expense Tracker</Link>
          </li>
          <li>
            <Link to="/breakingbadcast">Breaking Bad Cast</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Home;
