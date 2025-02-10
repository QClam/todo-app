import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
    const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
    const [inputText, setInputText] = useState("");
    const inputRef = useRef();

    const addTask = () => {
        if (!inputText.trim()) return;

        const newTask = {
            id: Date.now(),
            text: inputText.trim(),
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
        setInputText("");
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    const toggleTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            });
        });
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));   
    }, [tasks]);

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            {/**Title */}
            <div className="flex items-center mt-7 gap-2">
                <img className="w-8" src={todo_icon} alt="Icon" />
                <h1 className="text-3xl font-semibold">Todo List</h1>
            </div>
            {/**Input */}
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
                    type="text"
                    placeholder="Add your Task"
                />
                <button
                    className={`border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer transition-opacity ${inputText.trim() ? "opacity-100" : "opacity-50 cursor-not-allowed"
                        }`}
                    onClick={addTask}
                    disabled={!inputText.trim()}
                >
                    ADD +
                </button>
            </div>
            {/**Todo List */}
            <div>
                {tasks.map((item, index) => {
                    return (
                        <TodoItems
                            key={index}
                            text={item.text}
                            id={item.id}
                            isCompleted={item.isCompleted}
                            deleteTask={deleteTask}
                            toggleTask={toggleTask}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Todo;
