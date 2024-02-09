import { useState } from "react";

function ToDoInput({onNewItem}){
  const [name,setName]= useState();
  const [date,setDate]= useState();

  const handleNameChange =(event)=>{
    setName(event.target.value);
  };
  const handleDateChange =(event)=>{
    setDate(event.target.value);
  };
  const handleAddButtonClick =()=>{
    onNewItem(name,date);
    setName("");
    setDate("");
  };
    return <div className="container">
    <div className="row kg-row">
      <div className="col-sm-6">
        <input type="text" placeholder="Enter List"  value={name} onChange={handleNameChange} />
      </div>
      <div className="col-sm-4">
        <input type="Date" value={date} onChange={handleDateChange} />
      </div>
      <div className="col-sm-1">
        <button type="button" className="btn btn-success kg-button"
        onClick={handleAddButtonClick}>
          ADD
        </button>
      </div>
    </div>
  </div>
}
export default ToDoInput;