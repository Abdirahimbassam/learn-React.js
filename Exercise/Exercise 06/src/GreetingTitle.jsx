
import { useState, useEffect } from "react"

const GreetingTitle = () => {

    const [ name , setName ] = useState("")

    const [ greeting , setGreeting ] = useState("Hello")

    useEffect(()=> {
        if(!name) {
            document.title = "Welcome!";
        }else {
            document.title = `${greeting}, ${name}`;
        }   
    },[ name , greeting ])

    return (

        <div>
            <h1>Enter Your Name:</h1>
            <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />

            <h2>Choose a greeting:</h2>
            <input 
                type="text"
                placeholder="greeting"
                value={greeting}
                onChange={(e)=> setGreeting(e.target.value)}
            />
        </div>
        
    )
}

export default GreetingTitle;