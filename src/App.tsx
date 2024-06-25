import React, { useState } from 'react';
import './App.css';


interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
  onToggle: () => void;
}


function Todo({ todo, onToggle }: TodoInput): JSX.Element {
  return (
    <div className="todo-item">
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <p>{todo.done ? "Completed" : "Not Completed"}</p>
      <button onClick={onToggle}>
        {todo.done ? "Mark as Not Completed" : "Mark as Completed"}
      </button>
    </div>
  );
}

function App() {

  const [todo, setTodo] = useState<TodoType>({
    title: "Learn TypeScript",
    description: "Understand TypeScript basics and integration with React",
    done: false,
  });

  
  const toggleTodoStatus = () => {
    setTodo(prevTodo => ({
      ...prevTodo,
      done: !prevTodo.done,
    }));
  };

  return (
    <div className="App">
      <Todo todo={todo} onToggle={toggleTodoStatus} />
    </div>
  );
}

export default App;

