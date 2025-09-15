import React from "react";
import DeleteIcon from "../assets/delete.png";
import { motion, AnimatePresence } from "framer-motion";

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <div>
      <ul className="mt-4 space-y-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, x: 50}}
              transition={{duration: 0.3}}
              className="px-4 py-2 text-gray-700 flex justify-between gap-2 flex-warp"
            >
              <span
                className={`flex-1 cursor-pointer break-words ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() => onToggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <button
                className="hover:scale-110 transition"
                onClick={() => onDeleteTodo(todo.id)}
              >
                <img src={DeleteIcon} alt="" className="w-5 h-5" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default TodoList;
