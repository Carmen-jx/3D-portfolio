import React from 'react'
import { NavLink } from 'react-router-dom'
import { socialLinks } from '../constants'

const NavBar = () => {
  return (
    <header className='header'>
        <NavLink to ="/" className="w-20 h-10 rounded-lg
         bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>CarmenL</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive})=> isActive? 'text-blue-900' : 'text-slate-500'}> About</NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive? 'text-blue-900' : 'text-slate-500'}> Projects</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'text-blue-900' : 'text-slate-500'}> Contact</NavLink>
        </nav>
    
        



    </header>
  )
}

export default NavBar