import classes from "./Todo.module.scss";

function Todo({ currentValue, onRemoveTask, onToggleTask }) {
  return (
    <div className={classes.Todo}>
      <div
        className={currentValue.complete ? `${classes.item_text} ${classes.strike}` : `${classes.item_text}`}
        onClick={() => onToggleTask(currentValue.id)}
      >
        {currentValue.task}
      </div> <button onClick={ () => onRemoveTask(currentValue.id)}>X</button>
    </div>
  );
}

export default Todo;
