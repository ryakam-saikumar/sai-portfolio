import React from 'react'
import sai from '../assets/sai.jpg'

const Her = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={sai} alt="" 
         className='m-auto mb-8 rounded-full object-cover transform 
        align-middle transition-transform duration-300 hover:scale-105 place-items-center'
         style={{ width: '300px', height: '300px'}} />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ryakam SaiKumar</span>
            , Front-end Web Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
          <a href="#contact">
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            </a>
            <a href="https://1drv.ms/w/c/a4b07a7a6e2e1ba8/Ebl-cDV3xtZKhDXSSuGm5LUBtkhboKVJXTcjrjoouf9QEw">
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Her