

import { useState } from "react";
// import Conditional from "./Conditional";
import ToggleMessage from "./ToggleMessage";

const Notification = () => {

    // const [ isLoggedIn , setIsLoggedIn ] = useState(true);

    // const [ unreadMessages , setUndearMessages ] = useState(["you have "])


    return (
        // < Conditional isLoggedIn={isLoggedIn} />
        // < Conditional unreadMessages={unreadMessages} />
        <ToggleMessage />
    )
}

export default Notification;