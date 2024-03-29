function ToDoData({todoName,todoDate,onDeleteItem}){
    return(<div className="container ">
    <div className="row kg-row">
      <div className="col-sm-6">{todoName}</div>
      <div className="col-sm-4">{todoDate}</div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-danger kg-button" onClick={()=>{onDeleteItem(todoName)}}>
          Delete
        </button>
      </div>
    </div>
  </div>
  );
}
export default ToDoData;