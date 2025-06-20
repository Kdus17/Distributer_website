import React from 'react'
import  {Link} from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
        Page not found
        <Link to={'/'}><button>
            Go to Home
            </button></Link>
    </div>
   
  )
}

export default Notfound