import { useEffect, useState } from "react"

export const Kvadrat = (props) => {
    let [i, seti] = useState(0)
    let [a, seta] = useState('')

    let arr = ['div1', 'div2', 'div3', 'div4'];


    useEffect(() => {
        setTimeout(() => {
            seti(i + 1);
            if (i >= arr.length) {
                seti(0);
            }
            seta(arr[i]);
        }, 1000);
    }, [a])

    return (
        <div>

            <div className={`div`}>
                <div className={`${a}`}></div>
                <img src={props.url} alt="picture" className="img" />
            </div>
        </div>

    )

}