import React, {useState} from 'react'
import Ficha from './Ficha'

import { indCats } from '../../data/indData'

const Fichero = () => {
  // DEJAR POR DEFECTO CAMISAS DESPUES
  const [activeCat, setActiveCat] = useState('0')


  return (
    <div className='fichero'>
      <div className='categorias'>
        {indCats.map((data,index) => {
          return <>
            <button key={index} onClick={() => setActiveCat(index)}>{data.name}</button>
            {index < indCats.length - 1  ? <p> | </p> : null}
          </>
        })}
      </div>
      <Ficha {...indCats[activeCat]}/>
    </div>
  )
}

export default Fichero