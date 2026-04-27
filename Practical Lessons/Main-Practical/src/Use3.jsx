
import { useState } from "react";

const Use3 = () => {

    const [ name , setName ] = useState("")

    const handleChange = (event) => {
    
        setName(event.target.value)
    }

    return (

        <>

        <input type="text" value={name} onChange={handleChange} placeholder="Enter Your Name" />
        <p>Hello, {name}</p>

        </>
    )

}

export default Use3;