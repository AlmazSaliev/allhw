import { useState } from "react"

export const Input=()=>{
    let[value, setValue]=useState('')
    function getValue(e){
        setValue(e.target.value)
    }
    let[value2, setValue2]=useState('')
    function getValue2(e){
        setValue2(e.target.value)
    }
    let[value3, setValue3]=useState('')
    function getValue3(e){
        setValue3(e.target.value)
    }

    return(
        <div className="input1">
            <div className="box">
                <input type="text" onChange={getValue} value={value}/>
                <input type="text" onChange={getValue2} value={value2}/>
                <input type="text" onChange={getValue3} value={value3}/>
            </div>
            <div className="box2">
                <p>Значение инпута 1 {value}</p>
                <p>Значение инпута 2 {value2}</p>
                <p>Значение инпута 3 {value3}</p>
            </div>
        </div>
    )
}