import React from 'react'
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer-icons'>
        <a href='#'><FaFacebookSquare/></a>
        <a href='#'><FaInstagram/></a>
      </div>
      <p>Creado por: <a href='https://www.maximilianofrega.com' target='_blank' rel="noreferrer noopener">Maximiliano Frega</a></p>
    </footer>
  )
}

export default Footer