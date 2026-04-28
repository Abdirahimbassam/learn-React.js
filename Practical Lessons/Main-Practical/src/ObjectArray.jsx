

import { useState } from "react";

const ObjectArray = () => {

    // OBJECT IN USESTATE
    // const [ user , SetUser ] = useState( { name: "Abdirahim", age: 21, bio: "Full Stack" } );

    // const updateAge = () => {
    //     SetUser( {...user, age: user.age + 1} )
    // }

    // ARRAY IN USESTATE

    const [ items , setItems ] = useState( [ "Apple", "Banana" ] )

    const additem = () => {
        setItems([...items, "Orange"])
    }

    return (
        
        <>
            {/* OBJECT IN USESTATE  */}
            {/* <p>Name:{user.name}, Age: {user.age}, Bio: {user.bio} </p>
            <button onClick={updateAge}>Increase Age</button>   */}

            {/* ARRAY IN USESTATE    */}
            <ul>
                 {
                    items.map(item => (
                        <li>{item}</li>
                    ))
                 }
                 <button onClick={additem}>Add Orange</button>
            </ul>

        </>

    )

}


export default ObjectArray;