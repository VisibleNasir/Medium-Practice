import React from 'react'
import Quete from '../components/Quete'
import Auth from '../components/Auth'

const Signup = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
          <Auth />
        </div>
        <div className='invisible md:visible'>
          <Quete/>
        </div>
      </div>
      
    </div>
  )
}

export default Signup
