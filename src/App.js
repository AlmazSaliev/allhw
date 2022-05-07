import React, { useRef, useState } from "react";
import { Fetch } from "./component/Fetch";
import './App.css'

function App(){
  let inpValue
  let[inp,setInp]=useState(inpValue)
  let value = useRef();
  
  let[renderall,setRender]=useState(false)
  
  function render(){
    
    setRender(true)
    inpValue = value.current.value;
    setInp(value.current.value)
  }
  return (
    <div className="container">
      <div className="cont2">
        <input type='number' ref={value} className='inp'/>
        <button onClick={render} className='btn'>Рендер</button>
      </div>
      
      {renderall && <Fetch getInp={inp}/>}
    </div>
  )
}
export default App