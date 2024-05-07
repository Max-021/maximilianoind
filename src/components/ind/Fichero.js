import React, {useState,useRef,useEffect} from 'react'
import Ficha from './Ficha'

import { motion } from 'framer-motion';

import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { indCats } from '../../data/indData'
import { useWindowSize } from 'react-use';

const Fichero = () => {
  // DEJAR POR DEFECTO CAMISAS DESPUES
  const [activeCat, setActiveCat] = useState('camisas');
  const [isDragable, setIsDragable] = useState(false);
  const constraintsRef = useRef(null)
  const winSize = useWindowSize()

  useEffect(() => {
    if(document.querySelector('.categorias-container').clientWidth <= document.querySelector('.categorias').clientWidth) {
      setIsDragable('x')
    }
    window.addEventListener('resize', () =>{
      const catsCont  = document.querySelector('.categorias-container').clientWidth;
      const catsWidth = document.querySelector('.categorias').clientWidth;
      if(catsCont > catsWidth) {
        setIsDragable(false)
      }else {
        setIsDragable('x')
      }
    })
  },[])

  return (
    <>
      <div className='fichero'>
          <IoIosArrowBack className='arrow' style={{display: isDragable ? 'inline-block' : 'none'}}/>
        <div className='categorias-container' ref={constraintsRef}>
          {/* revisar el drag prop para que sea falso segun el tamaño de la pantalla */}
          <motion.div className='categorias' initial={{x:0}} drag={isDragable} dragMomentum={false}
            dragConstraints={constraintsRef}
            dragElastic={0}
            key={JSON.stringify(winSize)}
          >
            {indCats.map((data,index) => {
              return <div key={index} style={{display: 'flex', gap: '32px'}}>
                <p className={`indCatBtn ${data.name === activeCat ? 'activeCat' : null}`} onClick={() => setActiveCat(data.name)}>{data.name}</p>
                {index < indCats.length - 1  ? <p> | </p> : null}
              </div>
            })}
          </motion.div>
        </div>
          <IoIosArrowForward className='arrow' style={{display: isDragable ? 'inline-block' : 'none'}}/>
        {/* ORIGINAL */}
        {/* <div className='categorias-container'>
          <div className='categorias'>
            {indCats.map((data,index) => {
              return <div key={index} style={{display: 'flex', gap: '32px'}}>
                <p className={`indCatBtn ${data.name === activeCat ? 'activeCat' : null}`} onClick={() => setActiveCat(data.name)}>{data.name}</p>
                {index < indCats.length - 1  ? <p> | </p> : null}
              </div>
            })}
          </div>
        </div> */}
      </div>
      <Ficha categoria={activeCat.toLowerCase()}/>
    </>
  )
}

export default Fichero