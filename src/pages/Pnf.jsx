import React from 'react'
import { Link } from 'react-router-dom'
function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'30%'} src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="" />
      <Link to={'/'} className='btn btn-success'>Go to Home</Link>
    </div>
  )
}

export default Pnf