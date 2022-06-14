import { useState } from "react";
import classes from "./Todoform.module.scss";



function Todoform({onAddTask}) {

  const [userInput, setUserInput] = useState("");

  const onChange = (event) => {
    return (
      setUserInput(event.target.value)
    );
  } 

  const onSubmitChange = (event) => {
    return (
      event.preventDefault(),
      onAddTask(userInput),
      setUserInput("")
    );
  }
  
  function onKeyDown(event) {
    if(event.key === "Enter") {
      onSubmitChange(event);
    }
  }

  

  return ( 
    <div className={classes.Todoform}>
      <form onSubmit={onSubmitChange}>
        <input type="text" value={userInput} onChange={onChange} onKeyDown={onKeyDown}/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Todoform;