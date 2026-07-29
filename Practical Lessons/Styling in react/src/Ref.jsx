
// import React , {useEffect, useRef, useState} from 'react'

// export const Ref = () => {

//     const [ formData ,setFormData ] = useState({
//         name : " ",
//         email : " "
//     }) 

//     const [ errors , setErros ] = useState({})

//     const validateForm = () => {

//         const errors = {};

//         if(!formData.name.trim()) {
//             errors.name = "Name is required"
//         }

//         if(!formData.email.trim()) {
//             errors.email = "Email is required"
//         }

//         return errors;
//     }
   

//    const handleSubmit = (e) => {

//       e.preventDefault();
//       const validationErrors = validateForm()

//         console.log(Object.keys(validationErrors))
//       if(Object.keys(validationErrors).length > 0 ) {
//         console.log("success")
//       } else {
//         setErros(validationErrors)
//       }
//       console.log(formData)        

//    }

//    const handleChange = (e) => {

//     const { name , value } = e.target
    
//     setFormData((prevData) => ({... prevData , [name] : value }))  

//    }

//   return (

//         <form onSubmit={handleSubmit} className='space-y-6 mx-auto p-6 m-6 text-center'>
//             <label >Name: </label>
//             <input
//                 className='border-2'
//                 type="text"
//                 name='name'
//                 value={formData.name}
//                 onChange={handleChange}
               
//             />
//             <br />

//             {errors.name && <p className='border'>{errors.name}</p>}

//             <label >Email: </label>
//             <input 
//                 className='border-2'
//                 type="email"
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//             />


//             {errors.email && <p className='border'>{errors.email}</p>}
//             <br />
 
//             <button type='submit' className='bg-rose-400 py-2 px-4 text-white'>Submit</button>

//         </form>

//   )
// }
