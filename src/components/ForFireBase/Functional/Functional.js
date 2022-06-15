import classes from "./Functional.module.scss";


function Functional({ currentValue, onRemoveTask, onToggleTask}) {
  return (
    <div className={classes.Functional}>
      <div
        className={currentValue.complete ? `${classes.item_text} ${classes.strike}` : `${classes.item_text}`}
        onClick={() => onToggleTask(currentValue.id)}
      >
        {currentValue.task}
      </div>
      <button onClick={ () => onRemoveTask(currentValue.id)}>X</button>
    </div>
  );
}

export default Functional;