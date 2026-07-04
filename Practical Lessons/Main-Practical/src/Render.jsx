
import { useState, useEffect } from "react";

const Render = ()=> {

    // const items = [];

    // const myInfo = null;

    const [ items , setItems ] = useState()

    const [ myInfo , setMyInfo] = useState(null)

    const [ name , setName ] = useState('')

    const [ isStudent , setIsStudent ] = useState(false)
        
    return (

        <div>

            {
                items.length > 0 ? ( 
                <ul>
                    {
                        items.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
                ) : <p>Items not found</p>
            }

            {/* {
                myInfo ? ( <p>{myInfo.name}</p> ): <p>not info found</p> 
            }    */}

        </div>
    )

}

export default Render;