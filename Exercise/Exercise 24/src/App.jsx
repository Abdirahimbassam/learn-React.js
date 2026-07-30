
import {useForm} from 'react-hook-form'

export const App = () => {

  const { register , handleSubmit , formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data)
    alert("Registration Successfully")
  }

  return (

    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg  shadow-md'>
        <h1 className='text-2xl text-gray-800 font-bold mb-6 text-center'>Student Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>

          <div>
            <label className='block text-md fonr-medium mb-2 '>Student Name:</label>
              <input 
                    {...register , ("studentName" , {
                      required : " Name is required ",
                      minLength : {
                        value : 2,
                        message : " Name must be at least 2 characters "
                      }
                    })}
                    className='w-full p-2 border rounded '
              />
              {errors.studentName && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.studentName.message}
                </p>
              )}
          </div>

          <div>
            <label className='block text-md fonr-medium mb-2 '>Email:</label>
              <input 
                    {...register , ("email" , {
                      required : " Email is required ",
                      pattern : {
                        value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message : " Invalid email format "
                      }
                    })}
                    className='w-full p-2 border rounded '
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
          </div>

          <div>
            <label className='block text-md font-medium mb-2 '>Grade Level:</label>
            <select 
                  {...register , ("gradelevel" , {
                      required : " Please Select a grade ",
                  })}
                  className='w-full p-2 border rounded '
            >
              <option value="">Select Grade</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
    
            {errors.gradelevel && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.gradelevel.message}
                </p>
            )}

          </div>

        <div>
            <label className=' block text-md fonr-medium mb-2 '>Subject Interest:</label>
            <div>
              <label className='flex items-center'>
                <input 
                      type="checkbox" 
                      {...register ("subjects", {
                        required : "Select at least one subject"
                      })}
                      value="math"
                      className=''
                      />
                      Mathematics
              </label>

              <label className='flex items-center'>
                <input 
                      type="checkbox" 
                      {...register ("subjects", {
                        required : "Select at least one subject"
                      })}
                      value="science"
                      className=''
                      />
                      Science
              </label>

              <label className='flex items-center'>
                <input 
                      type="checkbox" 
                      {...register ("subjects", {
                        required : "Select at least one subject"
                      })}
                      value="english"
                      className=''
                      />
                      English
              </label>

            </div>

            {errors.subjects && (
              <p className='text-red-500 text-sm'>
                {errors.subjects.message}
              </p>
            )}

        </div>

        <button 
            type='submit'
            className='w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600'
        >
            Register
        </button>

        </form>

    </div>
  )
}
