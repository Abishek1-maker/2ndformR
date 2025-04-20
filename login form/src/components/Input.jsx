import { data } from 'autoprefixer'
import React from 'react'

const Input = ({title,name,id,type,className,...data}) => {
  return (
    <>
      <label htmlFor={name}
      className='font-medium p-2'>
        {title}
      </label>
      <input
       type={type}
        id={id} 
        name={name}
        {...data}
        placeholder={name}
       className={`border-black border-2 p-2 rounded-[2px] outline-none focus:border-blue-500 focus:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] ${className} `}
        />
    </>
  )
}

export default Input
