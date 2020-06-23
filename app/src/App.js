import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./pages/todoList/List";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todolist">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
