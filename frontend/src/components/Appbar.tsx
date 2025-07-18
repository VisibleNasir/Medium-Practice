import React from 'react'
import { Avatar } from './Blogcard'

const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
      <div className='flex flex-col justify-center'>
        Medium
      </div>
      <div> 
        <Avatar size = "big" name="Nasir Nadaf"/>
      </div>
    </div>
  )
}

export default Appbar
