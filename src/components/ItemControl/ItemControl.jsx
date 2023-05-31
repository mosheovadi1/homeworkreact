import React, { useState } from "react";
import plus from "../../assets/images/plus.avif";
import minus from "../../assets/images/minus.png";

const ItemControl = ({name}) => {
  const currentValue = parseInt(window.localStorage.getItem(name)) || 0
  const [counter, setCounter] = useState(currentValue);

  window.addEventListener(name,(function(e){
    const newValue = window.localStorage.getItem(name)
    setCounter(parseInt(newValue))
 }).bind(this));

  const addToCounter = () =>{

    setCounter((prevCounter) =>{
      window.localStorage.setItem(name, prevCounter+1)
      window.dispatchEvent(new Event(name))
      return prevCounter+1})
  }
  const removeFromCounter = () =>{
    setCounter((prevCounter) => {
      window.localStorage.setItem(name, Math.max(prevCounter-1, 0))
      window.dispatchEvent(new Event(name))
      return Math.max(prevCounter-1, 0)
    })
  }
  const width = 25
  const changeCounter =(e)=>{
    window.localStorage.setItem(name, e.target.value)
    window.dispatchEvent(new Event(name))
    setCounter(parseInt(e.target.value))
  }
return counter? (
    <div>
      <img src={plus} alt="add" onClick={addToCounter}  width={width}/>
      <input alt="counter" type='number' onChange={changeCounter} value={counter} style={{width:"5em"}}/>
      <img src={minus} alt="remove" onClick={removeFromCounter} width={width/1.5}/>
      </div>
  ):(<div></div>);
};

export default ItemControl;


