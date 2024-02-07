import ToDoData from "./ToDoData";
import style from "./ToDoItems.module.css";
const ToDoItems =({todo})=>{
    return (
    <div className={style.itemsContainer}>
        {todo.map((item)=>(
        <ToDoData todoDate={item.dueDate} todoName={item.name} />
        ))}
    </div>
    );
};
export default ToDoItems;