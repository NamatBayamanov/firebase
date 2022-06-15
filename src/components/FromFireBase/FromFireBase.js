import axios from "axios";
import { useEffect, useState } from "react";

function FromFireBase() {

  const [peaple, setPeaple] = useState(null);

  useEffect(() => {
    axios.get("https://crud-ca650-default-rtdb.firebaseio.com/inform.json").then(({data}) => {
      const newItem = Object.keys(data).map( (id) => {
        return(
          { id: id, ...data[id] }
        );
      });
      setPeaple(newItem);
    })
  }, []);

  

  let output = "Loading...";
  if(peaple !== null) {
    output = peaple.map((user) => {
      return (
        <li key={user.id}>{user.first_name} {user.last_name}</li>
      );
    })
  }

  console.log(output)
  return ( 
    <div className="FromFireBase">  
        <ul>
          {output}
        </ul>
    </div>
  );
}

export default FromFireBase;