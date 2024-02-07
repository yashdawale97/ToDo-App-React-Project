import ToDoInput from "./component/ToDoInput";
import ToDoTitle from "./component/ToDoTitle";
import "./App.css";
import ToDoItems from "./component/ToDoItems";

function App() {
  const todo = [
    {
      name: "Buy Milk",
      dueDate: "13-12-1997",
    },
    {
      name: "Go to School",
      dueDate: "13-12-1997",
    },
    {
      name: "Take a Break",
      dueDate: "13-12-1997",
    },
  ];
  return (
    <center>
      <ToDoTitle></ToDoTitle>
      <ToDoInput></ToDoInput>
      <ToDoItems todo={todo}></ToDoItems>
    </center>
  );
}
export default App;
