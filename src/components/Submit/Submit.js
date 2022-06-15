import axios from "axios";

function Submit() {

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert( `${formData.get("first_name")} ${formData.get("last_name")}`);

    axios.post("https://crud-ca650-default-rtdb.firebaseio.com/inform.json", Object.fromEntries(formData.entries()));
  }

  
  return ( 
    <div className="Submit">
      <form onSubmit={onSubmit}>
        <input type="text" name="first_name" />
        <input type="text" name="last_name" />
        <button>
          Deduce
        </button>
      </form>
    </div>
  );
}

export default Submit;