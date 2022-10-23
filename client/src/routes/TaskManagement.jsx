import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import TodoForm from "../components/Projects/TaskManagement/TodoForm"
import { useState } from 'react'
import TodoItem from "../components/Projects/TaskManagement/TodoItem"

export default function TaskManagement() {

    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        let id = 1
        if(todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = {id: id, text: text, completed: false }
        let newTodos = [todo, ...todos]
        console.log(newTodos);
        setTodos(newTodos)
    }
    const removeTodo = (id) => {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }
    const completeTodo = (id) => {
        console.log(id);
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <>
            <Navbar />
            <div className="todo-app">
                <h1 className="task-title">Task Manager</h1>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo) => {
                    return (
                        <TodoItem removeTodo={removeTodo} completeTodo ={completeTodo} todo={todo} key={todo.id}/>
                    )
                })}
            </div>

            <Footer/>
        </>

    )
}