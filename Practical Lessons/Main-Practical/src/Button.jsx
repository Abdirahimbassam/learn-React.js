

import { useState } from "react";

const Button = ({id}) => {

    const handleClick = (id) => {
        alert("button cliked..." + id)
    }

    return (
        <div>
            <button // onClick={()=> handleClick(id)} 
                onMouseEnter={()=> console.log("mouse entered....")} >Click Me {id}

            </button>
        </div>
    )

}

export default Button;