import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

const NavBar = () => {
  return (
    <div>
        <nav id='navbar'>
            <h2>
            <Link to='/'>
                <BiCameraMovie></BiCameraMovie>
                Home
            </Link>
            </h2>
            <Link to='/movie/1'>Home</Link>
            <Link to='Search'>Search</Link>
            
            
            <form>
                <input type="text" placeholder='Busque um filme'></input>
                <button type="submit">
                    <BiSearchAlt2></BiSearchAlt2>
                </button>
            </form>
        </nav>
      
    </div>
    
  )
}

export default NavBar