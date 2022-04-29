import { useState } from "react"

export const Input2=()=>{
    let[value, setValue]=useState({})
    function getValue(e){
        let obj = {input: e.target.value}
        setValue(obj)
    }
    
    function getValue2(e){
        let obj2 = {input2: e.target.value}
        setValue(obj2)
    }
    
    function getValue3(e){
        let obj3 = {input3: e.target.value}
        setValue(obj3)
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