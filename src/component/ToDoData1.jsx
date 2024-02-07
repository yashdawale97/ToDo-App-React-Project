function ToDoData1(){
    let todo1="Milk"
    let date1="13-12-1997"
    return<div className="container ">
    <div className="row kg-row">
      <div className="col-sm-6">{todo1}</div>
      <div className="col-sm-4">{date1}</div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  </div>
}
export default ToDoData1;