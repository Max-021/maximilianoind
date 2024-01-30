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
              <a key={index} href={`#${link.url}`}>{link.name}</a>
            ))}
        </nav>
  </motion.div>
  )
}

export default Navbar