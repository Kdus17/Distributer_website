import React from 'react'
import  {Link, useNavigate} from 'react-router-dom'

const Notfound = () => {
  const nav = useNavigate()
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4 select-none'>
        <p className='text-9xl  font-thin'>404</p>
        <p className='text-4xl font-bold'>Page Not Found</p>
        <div className='w-110 flex justify-between'>
          <Link to={'/'}><button className='py-1 px-3 w-50 text-xl rounded-md font-light bg-green-400 cursor-pointer'>
              Go to Home
              </button></Link>
              <button className='bg-blue-400 px-3 py-1 w-50 rounded-md text-xl font-light' onClick={()=>nav(-1)}>back</button>
        </div>
    </div>
   
  )
}

export default Notfound