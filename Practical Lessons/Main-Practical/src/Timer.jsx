
import { useState , useEffect } from "react";

const Timer = ()=> {

    const [ time, setTime ] = useState(0)

    const [ isRunning , setIsRunning ] = useState(false)

    useEffect(()=> {

        let timerId;

        if(isRunning) {

         timerId = setInterval(()=> {
                setTime((prev)=> prev + 1)
            }, 1000)
        }
        
        return () => clearInterval(timerId)
        
    },[isRunning])

    const handleStart = ()=> {
        setIsRunning(true)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false)
        setTime(0)
    }

    return (
       <div>
            <h2>Stopwatch {time} seconds</h2>
            <button onClick={handleStart} disabled={isRunning} >Star</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={handleReset}>Reset</button>
       </div>
    )

}

export default Timer;