import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./UserFireBase.module.scss";
function UserFireBase({onAddTask}) {
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

    const formData = new FormData(event.target)
    return (
      event.preventDefault(),
      
      axios.post("https://crud-ca650-default-rtdb.firebaseio.com/todolist.json", Object.fromEntries(formData.entries())),
      
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
    <div className={classes.UserFireBase}>
      <form onSubmit={onSubmitChange}>
        <input type="text" value={userInput} onChange={onChange} onKeyDown={onKeyDown} name="task"/>
        <button>Send</button>
      </form>
      <button onClick={onClearTask}>Clear task</button>
    </div>
  );
}

export default UserFireBase;