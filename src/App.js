import ForFireBase from "./components/ForFireBase/ForFireBase";
import Form from "./components/Form/Form";
import FromFireBase from "./components/FromFireBase/FromFireBase";
import List from "./components/List/List";
import LocalStorages from "./components/LocalStorages/LocalStorages";
import Submit from "./components/Submit/Submit";

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <LocalStorages/> */}

      
      <Submit/>
      <FromFireBase/>

      <ForFireBase />
    </div>
  );
}

export default App;
