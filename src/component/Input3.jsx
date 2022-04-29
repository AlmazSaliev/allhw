import { useState } from "react"

export const Input3=()=>{
    let[value, setValue]=useState({})
    function getValue(e){
        setValue((prev)=>{
            prev = e.target.value
            return {input: prev}
        })
    }
    
    function getValue2(e){
        setValue((prev)=>{
            prev = e.target.value
            return {input2: prev}
        })
    }
    
    function getValue3(e){
        setValue((prev)=>{
            prev = e.target.value
            return {input3: prev}
        })
    }
console.log(value);
    return(
        <div className="input1">
            <div className="box">
                <input type="text" onChange={getValue} value={value.input}/>
                <input type="text" onChange={getValue2} value={value.input2}/>
                <input type="text" onChange={getValue3} value={value.input3}/>
            </div>
            
            <div className="box2">
                <p>Значение инпута 1 {value.input}</p>
                <p>Значение инпута 2 {value.input2}</p>
                <p>Значение инпута 3 {value.input3}</p>
            </div>
            
        </div>
    )
}