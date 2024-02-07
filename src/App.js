import ToDoData1 from "./component/ToDoData1";
import ToDoData2 from "./component/ToDoData2";
import ToDoInput from "./component/ToDoInput";
import ToDoTitle from "./component/ToDoTitle";
import "./App.css";

function App() {
  return (
    <center>
      <ToDoTitle></ToDoTitle>
      <ToDoInput></ToDoInput>
      <div className="items-container">
        <ToDoData1></ToDoData1>
        <ToDoData2></ToDoData2>
      </div>
    </center>
  );
}

export default App;
