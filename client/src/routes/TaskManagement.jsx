import Navbar1 from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TaskForm from "../components/Projects/TaskManagement/TaskForm";
import { useState } from "react";
import TaskItem from "../components/Projects/TaskManagement/TaskItem";

export default function TaskManagement() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <Navbar1 />
      <div className="todo-app">
        <h1 className="task-title">TASK MANAGER</h1>
        <TaskForm addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <TaskItem
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
