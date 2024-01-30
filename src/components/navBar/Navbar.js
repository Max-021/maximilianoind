import React from 'react'
import links from '../../data/navData'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.6, ease: 'easeIn'}}
    className='nav-container'
  >
        <nav className='nav-list'>
            {links.map((link,index) => (
              // <NavLink key={index} to={`#${link.url}`} className={({ isActive }) => (isActive ? 'nav-list-item active_navlink' : 'nav-list-item')} end>
              //     {link.name}
              //   </NavLink>
              <a key={index} href={`#${link.url}`}>{link.name}</a>
            ))}
        </nav>
  </motion.div>
  )
}

export default Navbar