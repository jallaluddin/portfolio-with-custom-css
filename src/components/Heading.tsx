import React from 'react'

interface propsType {
    title: string;
}

const heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-lock pb-2'>{title}</p>
    </div>
  )
}

export default heading
