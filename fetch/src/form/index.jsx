import { useForm } from 'react-hook-form'
let counter = 0;

export function Form () {
    const {register, handleSubmit} = useForm();
  


    const onSubmit = (d) => 
        alert(JSON.stringify(d));



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Name: 
            <input {...register(' firstName')} />
        </label>

        <p>Render: <span>{counter++}</span></p>
        <input type="submit" value="submit"></input>

        </form>
    )
}

