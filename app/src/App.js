import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);
  const [value, setValue] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo..."
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
