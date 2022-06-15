import { useState } from "react";
import classes from "./Form.module.scss";

function Form() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const onSubmit = () => {
    
  }


  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  }

  const showUser = ()=> {
    alert(`${firstName} ${lastName}`);
  }

  return (
    <div className={classes.Form}>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" name="first_name" value={firstName} onChange={onChangeFirstName}/>
        </label>
        <label>
          <input type="text" name="last_name" value={lastName} onChange={onChangeLastName} />
        </label>
        <button onClick={showUser}>
          Send
        </button>
      </form>
      
    </div>
  );
}

export default Form;
