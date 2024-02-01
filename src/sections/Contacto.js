import React from 'react'
import SectionContainer from '../hoc/SectionContainer'

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
    <SectionContainer claseSeccion={'sect-contacto'} nombreSeccion={'contacto'}>
      <div className='section contact-content'>
        <div className='info-contacto'>
          <h2>Contacto</h2>
          <div className='detalle-contacto'>
            <p><FaLocationDot className='contact-icon'/> Dirección: Av. Álvarez Jonte 4994</p>
            <p><FaPhone className='contact-icon'/> Teléfono: 4648-0107</p>
            <p style={{alignSelf: 'center'}}>Horarios</p>
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
      </div>
    </SectionContainer>
  )
}

export default Contacto