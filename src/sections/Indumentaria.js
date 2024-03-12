import React from 'react'
import SectionContainer from '../hoc/SectionContainer'
import Fichero from '../components/ind/Fichero'

const Indumentaria = () => {
  return (
    <SectionContainer claseSeccion={'sect-ind'} nombreSeccion={'indumentaria'}>
      <div className='section ind-content'>
        <h2>Indumentaria</h2>
        <Fichero/>
      </div>
    </SectionContainer>
  )
}

export default Indumentaria