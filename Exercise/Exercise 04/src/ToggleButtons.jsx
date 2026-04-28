

import { useState } from "react";

const ToggleButtons = () => {

    const [ isOne , setIsState ] = useState(false);

    const Change = () => {
        setIsState(!isOne)
    }

    return (

        <>
            <p>The Button is { isOne ? "ON" : "OFF" }</p>
            <button onClick={Change}> { isOne ? "Turn OFF" : "Turn ON" } </button>
        </>

    )
} 


export default ToggleButtons;