import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    if (todoText.trim() === "") {
      alert("Hãy nhập việc cần làm");
      return;
    }
    onAddTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="flex shadow rounded-full bg-gray-100 w-full justify-between">
      <input
        type="text"
        placeholder="Nhập việc cần làm"
        className="focus:outline-none p-4 flex-1 bg-transparent text-sm md:text-base"
        value={todoText}
        maxLength={35}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="bg-orange-400 rounded-full p-2 px-4 text-white font-bold hover:bg-orange-700 transition"
        onClick={handleSubmit}
      >
        Thêm +
      </button>
    </div>
  );
}

export default TodoForm;
