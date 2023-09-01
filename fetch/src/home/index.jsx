import { useState } from 'react'



export function Main(){
    const [value, setValue] = useState(0);


    return (
        <>
        <button onClick={() => setValue(value + 1)}>{value}</button>
        </>
    )
}