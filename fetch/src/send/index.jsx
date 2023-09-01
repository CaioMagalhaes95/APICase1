import { useState } from 'react'
import { getAll } from '../services/send';

export function Send(){
    const [name, setName] = useState();

    const handleName =  async () => {
        const data = await getAll();
        setName(data);
        console.log("FOI")
    }

    const postName = async () => {
        const data = await postName();
        setName(data)
        console.log("AXE")
    }

    return(
        <form>
            <input className='name' placeholder="Digite...">
                
            </input>
            <button type="submit" value="submit" onClick={postName}>
                Submit
            </button>

            <label>{name}</label>
            <button type='button' onClick={handleName}>
                Get
            </button>
        </form>
    )



}