import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo, editTodoItem } from '../actions/index';

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [editText, setEditText] = useState("");
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false)
    console.log(editTodo);
  return (
   <>
   <div className="main-div">
      <div className="child-div"> 
        <figure>
        <figcaption>Add Your List Here</figcaption>
        </figure>
        {!isEditing ? 
        <div className="addItems">
          <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder="Add Items.." />
          <i className="fa fa-plus add-btn" onClick={() => {dispatch(addTodo(inputData)); setInputData("")}}></i>
        </div> :
        <div className="addItems">
        <input value={editTodo.data} onChange={(e) => {setEditText(e.target.value); setEditTodo({...editTodo, data: e.target.value})}} type="text" placeholder="Add Items.." />
        <button onClick={() => {dispatch(editTodoItem(editTodo)); setIsEditing(false)}}>Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
        }
        <div className="showItems">
          {
            list?.map((elem) => {
              return(
              <div className="eachItem" key={elem.id}>
                 <h3>{elem.data}</h3>
                 <div className="todo-btn">
                    <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                    <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={() => {setEditTodo(elem); setIsEditing(true);}}></i>
                  </div>
              </div>
            )})
          }
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-test="remove All" onClick={() => dispatch(removeTodo())}>Check List</button>
          </div>
      </div>
    </div>
   </>
  )
}

export default Todo