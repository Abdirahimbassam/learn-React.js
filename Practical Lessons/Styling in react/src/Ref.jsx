
import React , {useEffect, useRef, useState} from 'react'

export const Ref = () => {

    const [ formData ,setFormData ] = useState({
        name : " ",
        email : "" ,
        agreement : false , 
        country : ""
    }) 
   

   const handleSubmit = (e) => {

      e.preventDefault();

      console.log(formData)        

   }

   const handleChange = (e) => {

    const { name , value , type, checked } = e.target
    
    setFormData((prevData) => ({... prevData , [name] : type === "checkbox" ? checked :  value}))  

   }

  return (

        <form onSubmit={handleSubmit} className='space-y-6 mx-auto p-6 m-6 text-center'>
            <label >Name: </label>
            <input
                className='border-2'
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
               
            />
            <br />
            <label >Email: </label>
            <input 
                className='border-2'
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <label >Checked: </label>
            <input
                className='border-2'
                name='agreement'
                type="checkbox"
                checked={formData.agreement}
                onChange={handleChange}
                
            />
            <br />
            <label >Selected: </label>
           <select name='country' value={formData.country} onChange={handleChange}  className='border-2'>
                <option value="">Country</option>
                <option value="somalia"> Somalia </option>
                <option value="kenya"> Kenya </option>
           </select>
            <br/>
            <button type='submit' className='bg-rose-400 py-2 px-4 text-white'>Submit</button>

        </form>

  )
}
