import { createContext, useContext } from "react";

export const TodoContext = createContext({
  tasks: [
    {
      id: 1,
      Task: "do this now",
      Completed: false,
    },
  ],
  addTask:(value)=>{},
  editTask:(id,value)=>{},
  removeTask:(id)=>{},
  toggleComplete: (id)=>{}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider
