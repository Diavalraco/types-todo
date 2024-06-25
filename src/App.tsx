import React, { useState } from 'react';
import './App.css';

// Define an interface to specify the structure of a todo object
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

// Define the input prop for the Todo component
interface TodoInput {
  todo: TodoType;
  onToggle: () => void;
}

// Create a React component 'Todo' that takes a 'todo' prop and renders it
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
  // Initial state for the todo item
  const [todo, setTodo] = useState<TodoType>({
    title: "Learn TypeScript",
    description: "Understand TypeScript basics and integration with React",
    done: false,
  });

  // Function to toggle the 'done' state of the todo item
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

