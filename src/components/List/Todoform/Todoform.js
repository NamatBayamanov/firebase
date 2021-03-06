import { useEffect, useState } from "react";
import classes from "./Todoform.module.scss";



function Todoform({onAddTask}) {

  const [userInput, setUserInput] = useState("");


  useEffect(() => {
    setUserInput(window.localStorage.getItem("userInput"));
  });

  const onChange = (event) => {
    return (
      setUserInput(event.target.value),
      window.localStorage.setItem("userInput", event.target.value)
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

  const onClearTask = () => {
    window.localStorage.removeItem("userInput");
    setUserInput("");
  }

  return ( 
    <div className={classes.Todoform}>
      <form onSubmit={onSubmitChange}>
        <input type="text" value={userInput} onChange={onChange} onKeyDown={onKeyDown}/>
        <button>Send</button>
      </form>
      <button onClick={onClearTask}>Clear task</button>
    </div>
  );
}

export default Todoform;