
import React , {useEffect, useRef, useState} from 'react'

export const Ref = () => {

    const [ formData , setFormData ] = useState({
        username: "" ,
        email: "" ,
        password: ""
    })

   const handleSubmit = (e) => {
        e.preventDefault()
       
        console.log(formData)
   }

   const handleChange = (e) => {

    const { name , value } = e.target


    setFormData((prevData) => ( { ...prevData , [name] : value } ) )
     
   }

  return (

        <form onSubmit={handleSubmit}>

            <input 
                type="text"
                name='username'
                value={formData.name}
                placeholder='Enter Username' 
                onChange={handleChange}
            />

            <input 
                type="email" 
                name='email'
                value={formData.email}
                placeholder='Enter Email '
               onChange={handleChange}
            />

            <input 
                type="password" 
                name='password'
                value={formData.password}
                placeholder='Enter Password '
               onChange={handleChange}
            />
       
            <button type='submit'>Submit</button>

        </form>

  )
}
