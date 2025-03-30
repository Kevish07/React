import React, { useState } from "react";
import { useTodo } from "../context";

export default function TaskItems({tasks}) {
  const [isEditable,setIsEditable] = useState(false)
  const [task,setTask] = useState(tasks.task)
  const {editTask,removeTask,toggleComplete} = useTodo()

  const edit = ()=>{
    editTask(tasks.id,{...tasks, task: task})
    setIsEditable(false)
  }
  const toggleCompleted = ()=>{
    toggleComplete(tasks.id)
  }


  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        tasks.Completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={tasks.Completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${tasks.Completed ? "line-through" : ""}`}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (tasks.Completed) return;

          if (isEditable) {
            edit();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={tasks.Completed}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTask(tasks.id)}
      >
        ❌
      </button>
    </div>
  );
}
