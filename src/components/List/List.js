import { useState } from "react";
import classes from "./List.module.scss";
import Todo from "./Todo/Todo";
import Todoform from "./Todoform/Todoform";


function List() {
  const [todos, setTodos] = useState([]);

  const onAddTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem]);
    }
  }

  const onRemoveTask = (id) => {
    setTodos([...todos.filter((currentValue, index, arr) => currentValue.id !== id )]);
  }

  const onToggleTask = (id) => {
    setTodos([...todos.map((currentValue, index, arr) => currentValue.id === id ? {...currentValue, complete: !currentValue.complete } : {...currentValue} )]);
  }
  return (
    <div className={classes.List}>
      <h2>
        List of task: {todos.length}
      </h2>

      <Todoform onAddTask={onAddTask}/>
      {todos.map((currentValue, index, arr) => {
        return (
          <Todo key={currentValue.id} currentValue={currentValue} onRemoveTask={onRemoveTask} onToggleTask={onToggleTask}/>
        );
      })}
    </div>
  );
}

export default List;
