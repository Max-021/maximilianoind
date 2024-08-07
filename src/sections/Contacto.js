import React from 'react'
import { motion } from 'framer-motion';
import SectionContainer from '../hoc/SectionContainer'
import Footer from '../components/footer/Footer';

import { mediosDePago } from '../data/icons';

import { FaPhone, FaLocationDot  } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

//poner horario, direccion, telefono, mapa, redes
//agregar medios de pago
//agregar responsividad combinada con el footer

//INVERTIR COLORES ENTRE PORTADA Y CONTACTO PARA MEJORAR VISIBILIDAD DE LOS MEDIOS DE PAGO

//falta MODO y CUENTA DNI en formas de pago

const Contacto = () => {
  return (
    <>
    <SectionContainer claseSeccion={'sect-contacto'} nombreSeccion={'contacto'}>
      <motion.div className='section contact-content'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ease:'easeInOut', duration: 0.5}}
      >
        <div className='info-contacto'>
          <h2>Contacto</h2>
          <div className='detalle-contacto'>
            <p><FaLocationDot className='contact-icon'/> Dirección: Av. Álvarez Jonte 4994</p>
            <p><FaPhone className='contact-icon'/> Teléfono: 4648-0107</p>
            <p className='horarios'>Horarios</p>
            <p><MdOutlineWatchLater className='contact-icon'/> Lun a Vie: 10hs a 13hs y 16hs a 20hs</p>
            <p><MdOutlineWatchLater className='contact-icon'/> Sáb: 10hs a 14hs y 16hs a 20hs</p>
          </div>
            <p>Formas de pago</p>
          <div className='medios-de-pago'>
            {mediosDePago.map((medio, index) => {
              return <img className='medioIcon' src={medio} key={index} alt={`medio${index}`}/>
            })}
          </div>
        </div>
        <img className='mapa-contacto' src={require('../assets/images/mapa-contacto.png')} alt='mapa-contacto'/>
      </motion.div>
    </SectionContainer>
      <Footer/>
    </>
  )
}

export default Contacto