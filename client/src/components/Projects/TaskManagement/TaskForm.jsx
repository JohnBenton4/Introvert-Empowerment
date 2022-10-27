import React, { useState } from 'react'

//this is not our code we do not own this part of our code here we followed along with a youtube tutorial to make a todolist , we give full credit to https://www.youtube.com/channel/UC8efAa0PWX5zGrrYhg2oR1A/featured"
function TaskForm(props) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div className='todo-container'>
              <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Enter Task"
        />
        <button type="submit" className="todo-button">Add</button>  
            </div>
      </form>
    )
}

export default TaskForm