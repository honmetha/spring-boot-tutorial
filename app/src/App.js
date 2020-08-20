import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TodoList from "./pages/todoList/List";
// import ExpenseTrackerList from "./pages/expenseTracker/List";
import BreakingBadCast from "./pages/breakingBadCast/List";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/todolist">
          <TodoList />
        </Route>
        {/* <Route exact path="/expensetracker">
          <ExpenseTrackerList />
        </Route> */}
        <Route exact path="/breakingbadcast">
          <BreakingBadCast />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
