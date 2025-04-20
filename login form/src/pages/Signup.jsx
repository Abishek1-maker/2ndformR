import React from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <>
    <div className='border-2 min-h-117.5  flex justify-center items-center bg-amber-100 border-transparent'>
      <form onSubmit={handleSubmit((data)=>console.log(data))}  className='flex-col flex items-center '>
        <Input
        title="Email"
        type="email"
        id="email"
        
        {...register("email",{
          required:"Email is required",
          pattern:{
            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"Invalid email address"
          }
        })}
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        
         <Input
        title="Password:"
        type="password"
        id="password"
        {...register("password",{
          required:"password is required"
        })}
        />
        {
          errors.password &&(
            <p className='text-red-500'>{errors.password.message}</p>
          )
        }
        <br />
        <button className='text-2xl text-white bg-sky-700 cursor-pointer focus:bg-sky-400 h-10 rounded-[2px] min-w-50'>Log In</button>
      </form>
    </div>
    </>
  )
}

export default Signup
