import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

//this portion is not our original code, we give full credit to https://www.youtube.com/channel/UC8efAa0PWX5zGrrYhg2oR1A/featured"
function TaskItem(props) {
  const { todo, removeTodo, completeTodo } = props;
  return (
    <div className={todo.completed ? "todo-row complete " : "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <input
          className="checkmark"
          type="checkbox"
          onClick={() => completeTodo(todo.id)}
        />
        <RiDeleteBin6Line
          className="icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TaskItem;
