
import { UseForm } from './UseForm'

export const ContactForm = () => {

  const { values , handleChange } = UseForm ({
      name: '',
      email: '',
      phone: '',
      message: '',
  })

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log('Form Data:', values)
  }

  return (

    <form onSubmit={handleSumbit}>
      <h2>Custom Hook</h2>
      <div>
        {/* name */}
        <label>
          Name:
          <input 
            type="text"
            name='name'
            required
            onChange={handleChange}
            value={values.name}
           />

        </label>
       </div>
        <br/>
        {/* email */}
        <div>
        <label>
          Email:
          <input 
            type="text"
            name='email'
            required
            onChange={handleChange}
            value={values.email}
           />

        </label>
        </div>
        <br/>
        {/* phone */}
        <div>
        <label>
          Phone:
          <input 
            type="number"
            name='phone'
            required
            onChange={handleChange}
            value={values.phone}
           />

        </label>
        </div>
          <br/>

        {/* message */}
        <div> 
        <label>
          Message:
          <input 
            type="text"
            name='message'
            required
            onChange={handleChange}
            value={values.message}
           />

        </label>
        </div>
      
      <button type='submit'>Submit</button>
    </form>

  )
}
