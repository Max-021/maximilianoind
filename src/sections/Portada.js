import React from 'react'
import { motion } from 'framer-motion';
import SectionContainer from '../hoc/SectionContainer'
import Carousel from '../components/portada/Carousel';

const Portada = () => {

  return (
    <SectionContainer claseSeccion={'sect-portada'} nombreSeccion={'portada'}>
      <div className='section sect-portada'>
        <motion.div className='info-portada'
          initial={{x:-850}}
          animate={{x:0}}
          transition={{duration:0.7, ease: 'easeOut'}}
        >
          <h1>Maximiliano Hombres</h1>
          <p>Desde 1999 en Monte Castro.</p>
          <p>Somos una empresa familiar dedicada a ofrecer productos de calidad a nuestros clientes acorde a lo que necesiten, logrando que confien en nosotros a lo largo de más de 20 años en el barrio.</p>
          <a className='btn-portada' href='#indumentaria'>Nuestro producto</a>
        </motion.div>
      </div>
      <Carousel/>
    </SectionContainer>
  )
}

export default Portada