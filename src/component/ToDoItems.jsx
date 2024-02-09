import ToDoData from "./ToDoData";
import style from "./ToDoItems.module.css";
const ToDoItems =({todoList,onDeleteItem})=>{
    return (
    <div className={style.itemsContainer}>
        {todoList.map((item)=>(
        <ToDoData todoDate={item.dueDate} todoName={item.name} onDeleteItem={onDeleteItem}/>
        ))}
    </div>
    );
};
export default ToDoItems;