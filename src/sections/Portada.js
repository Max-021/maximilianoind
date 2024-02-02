import React from 'react'
import SectionContainer from '../hoc/SectionContainer'


const Portada = () => {

  return (
    <SectionContainer claseSeccion={'sect-portada'} nombreSeccion={'portada'}>
      <div className='section sect-portada'>
        <div className='info-portada'>
          <h1>Maximiliano Hombres</h1>
          <p>Desde 1999 en Monte Castro.</p>
          <p>Somos una empresa familiar dedicada a ofrecer productos de calidad a nuestros clientes, acorde a lo que necesiten logrando que confien en nosotros a lo largo de más de 20 años en el barrio.</p>
          <a className='btn-portada' href='#indumentaria'>Nuestro producto</a>
        </div>
      </div>
      <img className='img-portada' src={require('../assets/images/mapa-contacto.png')} alt=''/>
    </SectionContainer>
  )
}

export default Portada