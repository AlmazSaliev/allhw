import { useEffect, useState } from "react"
import { Kvadrat } from "./Kvadrat"



export const Fetch = (props) => {
    let [data, setData] = useState([])
    let k = props.getInp;
    
    useEffect(() => {
           fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${props.getInp}`)
            .then(response => response.json())
            .then(data => setData(data)) 
            console.log(props.getInp)
    },[k])
    function firstUpp(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="box">
            {data.map((i) =>{
                let count = 0;
                return <div className="box2">
                    <h2>{firstUpp(i.title)}</h2>
                    <div className="id">{i.id}</div>

                    <Kvadrat url={i.thumbnailUrl} count={count} />
                </div>
            })}
        </div>
    )
}