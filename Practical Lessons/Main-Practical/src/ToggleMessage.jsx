
import { useState } from "react";

const ToggleMessage = () => {

    const [ isVisible , setIsVisible ] = useState(false)

    // const toggle = () => {
    //     setIsVisible(!isVisible)
    // }

    const toggle = () => setIsVisible(!isVisible)

    return (

        <div>

            <button onClick={toggle}> {isVisible ? "Hide Message" : "Show Message"}</button>
            {
                isVisible && <p>This message is toggelable</p>
            }

        </div>
    )
}

export default ToggleMessage;