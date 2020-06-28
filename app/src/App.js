import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TodoList from "./pages/todoList/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/todolist">
          <TodoList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
