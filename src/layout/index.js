import React from 'react'
import logo from '../assets/student.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <img 
              src={logo}
              alt='logo'
              width={180}
              height={40}
            />
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
