import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({mokh}) => {
  return (

    <div className='nabrar d-flex flex-column gap-3 '>
            <Link to={"/"}> <button className='btn btn-primary' >Catalog</button></Link>
            <Link to={"/create"}> <button className='btn btn-primary'>Add Book</button></Link>
    </div>
  )
}

export default Navbar