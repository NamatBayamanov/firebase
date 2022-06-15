import { useEffect, useState } from "react";

function LocalStorages() {

  const [local, setLocal] = useState("");

  useEffect(() => {
    setLocal(window.localStorage.getItem("local"));
  }, []);


  const onChange = (event) => {
    window.localStorage.setItem("local", event.target.value)
    setLocal(event.target.value);
  }


  const onClearLocal = (event) => {
    window.localStorage.removeItem("local");
    setLocal("");
  }


  return ( 
    <>
      <label>
        <input type="text" value={local} onChange={onChange}/>
      </label>
      <button onClick={onClearLocal}>
        Clear
      </button>
    </>
  );
}

export default LocalStorages;