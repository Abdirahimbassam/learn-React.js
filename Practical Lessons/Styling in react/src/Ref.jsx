
import React , {useEffect, useRef, useState} from 'react'

export const Ref = () => {

    const [ isChecked ,setIsChecked ] = useState(false) 
    const [ selectedOptions ,setSelectedOptions ] = useState('') 

   const handleSubmit = (e) => {

        e.preventDefault();
       
        if(!isChecked) {
            alert("Please check the box")
            return
        }
        console.log(isChecked)

        if(selectedOptions == "") {
            alert("Please choose an option ")
            return
        }

        console.log(selectedOptions)

   }

   const handleCheckboxChange = (e) => {

    setIsChecked(e.target.checked)
     
   }

  return (

        <form onSubmit={handleSubmit} className='space-y-6 mx-auto p-6 m-6 text-center'>
            <label >Checked: </label>
            <input 
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
            />
            <br />
            <label >Selected: </label>
           <select value={selectedOptions} onChange={(e)=> setSelectedOptions(e.target.value)}>
                <option value="">Selected Options</option>
                <option value="Options 1"> Options 1 </option>
                <option value="Options 2"> Options 2 </option>
           </select>
            <br/>
            <button type='submit' className='bg-rose-400 py-2 px-4 text-white'>Submit</button>

        </form>

  )
}
