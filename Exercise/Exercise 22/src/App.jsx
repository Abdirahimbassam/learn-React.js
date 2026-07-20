
import React , { useState } from 'react'

export const App = () => {

    const [ inputValues , setInputValues ] = useState({
      name : "" ,
      email : "" ,
      password : "" ,
    })

    const [ isChecked , setIsChecked ] = useState(false)
    const [ selectedOptions , setSelectedOptions ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!isChecked) {
          alert("Please check the box")
          return
      }
        console.log("submited....", inputValues)
        console.log("ischecked....", isChecked)

        if(selectedOptions == "") {
            alert("Please choose an option ")
        }
         console.log("Selected....", selectedOptions)
    }

    const handleChange = (e) => {

      const { name , value } = e.target
      setInputValues((prevData) => ({...prevData , [name] : value }))

    }

    const handleChecked = (e) => {
      setIsChecked(e.target.checked)
    }

  return (

    <div className='mx-auto my-6 text-center'>
          <h1 className='text-3xl font-semibold text-rose-500 mb-4'>Form Controller</h1>
          <form onSubmit={handleSubmit}  className='space-y-6'>
              <label>Name:   </label>
              <input 
                className='border'
                type="text"
                name='name'
                value={inputValues.name}
                onChange={handleChange}
                
              />
              <br/>
              <label>Email:   </label>
              <input 
                className='border'
                type="email"
                name='email'
                value={inputValues.email}
                onChange={handleChange}
               
              />
              <br/>
              <label>Password:   </label>
              <input 
                className='border'
                type="password"
                name='password'
                value={inputValues.password}
                onChange={handleChange}
                
              />
              <br/>
              <label> Agree our terms and condition:</label>
              <input
                className='border '
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
                
              />

              <br/>
              <select value={selectedOptions} className='border px-2 py-1' onChange={(e)=> setSelectedOptions(e.target.value)}>
                <option value="">Sig In</option>
                <option value="">Google</option>
                <option value="">Apple</option>
              </select>
              <br />
              <button type='submit' className='bg-rose-500 text-white px-6 py-2'>Submit</button>
          </form>
          
    </div>
  

  )
}
