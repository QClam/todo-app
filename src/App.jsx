import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodoList = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodoList);
  };

  const handleToggleTodo = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Danh sách: ", todos);
  }, [todos]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-900">
      <div className="shadow-sm rounded-2xl p-4 w-full max-w-md min-h-[550px] bg-white">
        <h1 className="text-3xl font-semibold p-4 text-center">Danh sách công việc</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
