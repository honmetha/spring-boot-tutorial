import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TodoList from "./pages/todoList/List";
import ExpenseTracker from './pages/expenseTracker/List'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/todolist">
          <TodoList />
        </Route>
        <Route exact path="/expensetracker">
          <ExpenseTracker />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
