
// import { useEffect, useState } from "react";

// const LifeCyle = () => {

//     const [ title , setTitle ] = useState("Main-Practical")

//     const [ name , setName] = useState("MC")

//     useEffect(()=> {
//         document.title = title;
//         console.log(title)
//     },[title])

//     return (
//         <div>
//             <h1>type to change the document title</h1>
//             <input 
//                 type="text"
//                 onChange={(e)=> setTitle(e.target.value)}
//             />
//             <input 
//                 type="text" 
//                 onChange={(e)=> setName(e.target.value)}
//             />
//         </div>
//     )
// }

// export default LifeCyle;