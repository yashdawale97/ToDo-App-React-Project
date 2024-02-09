import ToDoInput from "./component/ToDoInput";
import ToDoTitle from "./component/ToDoTitle";
import "./App.css";
import ToDoItems from "./component/ToDoItems";
import { useState } from "react";
import Welcome from "./component/Welcome";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoItem = (todoName, todoDueDate) => {
    console.log(`TodoName is :${todoName} and Date is :${todoDueDate}`);
    const newTodoItems = [
      ...todoList,
      { name: todoName, dueDate: todoDueDate },
    ];
    setTodoList(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoList.filter((item) => item.name !== todoItemName);
    setTodoList(newTodoItems);
    console.log(`Item Deleted :${todoItemName}`);
  };
  return (
    <center>
      <ToDoTitle></ToDoTitle>
      <ToDoInput onNewItem={todoItem}></ToDoInput>
      {todoList.length === 0 && <Welcome></Welcome>}
      <ToDoItems
        todoList={todoList}
        onDeleteItem={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}
export default App;
