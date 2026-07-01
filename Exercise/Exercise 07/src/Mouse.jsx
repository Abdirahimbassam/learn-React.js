
import { useState , useEffect } from "react";

const Mouse = () => {

    const [ count, setCount ] = useState({ x: 0 , y: 0})

    useEffect(()=> {
        const handleMouseMove = (e)=> {
            setCount({ x: e.clientX, y: e.clientY })
        }

         window.addEventListener("mousemove", handleMouseMove)

        return()=> {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[]);

    return (
        <div>
            <h1>MouseX: {count.x}</h1>
            <h1>MouseY: {count.y}</h1>
        </div>
    )
}

export default Mouse;