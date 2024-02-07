function ToDoInput(){
    return <div className="container">
    <div className="row kg-row">
      <div className="col-sm-6">
        <input type="text" placeholder="Enter List" />
      </div>
      <div className="col-sm-4">
        <input type="Date" />
      </div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-success kg-button">
          ADD
        </button>
      </div>
    </div>
  </div>
}
export default ToDoInput;