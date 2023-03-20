import { useState } from "react";

import "./App.css";

import { Todo } from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([
    { title: "react" },
  ]);

  const [currentTodo, setcurrentTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => {
      return [...prev, { title: currentTodo }];
    });

    setcurrentTodo("");
  };

  const handleRemove = (title) => {
    const new_todos = todos.filter((todo) => todo.title !== title)

    setTodos(new_todos)
  }

  const handleEdit = (value) => {
    console.log(value);
  }


  return (
    <div>
      <form name="create-todo" className="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTodo}
          placeholder="Todo title"
          onChange={(e) => setcurrentTodo(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <div className="todolist">
        {todos.map((todo) => {
          return <Todo key={todo.title} title={todo.title} handleRemove={handleRemove} handleEdit={handleEdit} />;
        })}
      </div>
    </div>
  );
}

export default App;
