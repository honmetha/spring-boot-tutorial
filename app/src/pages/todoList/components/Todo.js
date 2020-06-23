import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.iscompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
