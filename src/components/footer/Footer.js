import React, {useEffect, useState}  from 'react'
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const [customHeight, setCustomHeight] = useState(0); 
  const responsiveSize = 900;
  const adjustResponsivePadding = () => {
    if(window.innerWidth > responsiveSize) {
      setCustomHeight(0)
    } else{
      const navHeight = document.querySelector('.nav-container').clientHeight;
      setCustomHeight(navHeight)
    }
  }
  useEffect(()=>{
    const initialNavHeight = document.querySelector('.nav-container').clientHeight;
    adjustResponsivePadding();    
  },[customHeight])

  useEffect(()=> {
    const initialNavHeight = document.querySelector('.nav-container').clientHeight;
    window.addEventListener('resize', adjustResponsivePadding);
      if(window.innerWidth > responsiveSize) {
        setCustomHeight(0)
      } else {
        setCustomHeight(initialNavHeight);        
      }
  }, [])
  return (
    <footer style={{paddingBottom: `${customHeight}px`}}>
      <div className='footer-icons'>
        <a href='#'><FaFacebookSquare/></a>
        <a href='https://www.instagram.com/maximiliano_hombres/' target='_blank' rel="noreferrer noopener"><FaInstagram/></a>
      </div>
      <p>Creado por: <a href='https://www.maximilianofrega.com' target='_blank' rel="noreferrer noopener">Maximiliano Frega</a></p>
    </footer>
  )
}

export default Footer