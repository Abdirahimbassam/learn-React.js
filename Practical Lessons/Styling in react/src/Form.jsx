
import { useForm } from 'react-hook-form'

export const Form = () => {

  const { register , handleSubmit , watch , formState : {errors} } =  useForm();

  console.log(errors.username)

  const onSubmit = (data) => {
    console.log(data)
  }

  const password = watch("password")
  console.log(password)

  return (
    <div className='p-4 mx-auto'>
        <h1 className='mb-4'>React Hook Form</h1>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username:</label>
                    <input 
                        type="text"
                        className='border'
                        {...register("username" , {required: "Name is required"})}
                    />
                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
            </div>

            <br/>
            <div>
                <label>Email:</label>
                    <input 
                        type="email"
                        className='border'
                        {...register("email" , {required: "Email is required", pattern:{value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email Address"}})}
                    />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
       
            <br/>
            <div>
                <label>Password:</label>
                    <input 
                        type="password"
                        className='border'
                        {...register("password", {required: "Password is required" , minLength : {
                            value: 6,
                            message : "Password must be at least 6 characters"
                        }})}
                    />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            <div>
                <label>Confrim Password:</label>
                    <input 
                        type="password"
                        className='border'
                        {...register("ConfrimPassword", {required: "ConfrimPassword is required" , validate: (value)=> value === password || "Password do not match " })}
                    />
                {errors.ConfrimPassword && <p className='text-red-500'>{errors.ConfrimPassword.message}</p>}
            </div>

            <div>
                <label>
                    <input 
                        type="checkbox"
                        className='border text-red-500'
                        {...register("terms", {required: "You must accept the terms" ,})}
                    />
                {errors.terms && <p className='error'>{errors.terms.message}</p>}
                 I accept the terms and conditions
                </label>
            </div>
        
            <br/>
            <button className='bg-rose-500 text-white px-6 py-1 rounded-l-md'>Submit</button>
        </form>
    </div>
  )
}
