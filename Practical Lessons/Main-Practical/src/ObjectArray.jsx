

import { useState } from "react";

const ObjectArray = () => {

    const [ user , SetUser ] = useState( { name: "Abdirahim", age: 21, bio: "Full Stack" } );

    const updateAge = () => {
        SetUser( {...user, age: user.age + 1} )
    }

    return (
        
        <>

            <p>Name:{user.name}, Age: {user.age}, Bio: {user.bio} </p>
            <button onClick={updateAge}>Increase Age</button>

        </>

    )

}


export default ObjectArray;