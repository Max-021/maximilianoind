import React, {useState} from 'react'
import Ficha from './Ficha'

import { indCats } from '../../data/indData'

const Fichero = () => {
  // DEJAR POR DEFECTO CAMISAS DESPUES
  const [activeCat, setActiveCat] = useState('test')


  return (
    <>
      <div className='fichero'>
        <div className='categorias'>
          {indCats.map((data,index) => {
            return <div key={index} style={{display: 'contents'}}>
              <p className={`indCatBtn ${index === activeCat ? 'activeCat' : null}`} onClick={() => setActiveCat(data.name)}>{data.name}</p>
              {index < indCats.length - 1  ? <p> | </p> : null}
            </div>
          })}
        </div>
      </div>
      <Ficha categoria={activeCat.toLowerCase()}/>
    </>
  )
}

export default Fichero