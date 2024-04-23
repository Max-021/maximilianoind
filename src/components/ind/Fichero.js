import React, {useState} from 'react'
import Ficha from './Ficha'

import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { indCats } from '../../data/indData'

const Fichero = () => {
  // DEJAR POR DEFECTO CAMISAS DESPUES
  const [activeCat, setActiveCat] = useState('camisas')

  const move = (direction) => {
    if(direction === 'right'){
      console.log('move right')
    }else{
      console.log('move left')
    }
  }

  return (
    <>
      <div className='fichero'>
        <IoIosArrowBack onClick={() => move('left')} style={{paddingRight: '15px'}}/>
        <div className='categorias'>
          {indCats.map((data,index) => {
            return <div key={index} style={{display: 'contents'}}>
              <p className={`indCatBtn ${index === activeCat ? 'activeCat' : null}`} onClick={() => setActiveCat(data.name)}>{data.name}</p>
              {index < indCats.length - 1  ? <p> | </p> : null}
            </div>
          })}
        </div>
        <IoIosArrowForward onClick={() => move('right')} style={{paddingLeft: '15px'}}/>
      </div>
      <Ficha categoria={activeCat.toLowerCase()}/>
    </>
  )
}

export default Fichero