import React from 'react'
import Quete from '../components/Quete'
import Auth from '../components/Auth'

const Signin = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <Auth type='signin'/>
        </div>
        <div className='hidden lg:block'>
          <Quete/>
        </div>  
      </div>
      
    </div>
  )
}

export default Signin
