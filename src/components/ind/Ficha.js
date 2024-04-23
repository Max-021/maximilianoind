import React, {useEffect, useState, useRef} from 'react'
import _ from 'lodash'
import { motion } from 'framer-motion';

//array of objects with a property that has an array of images
import {imgPack} from './imagesLoader'

const imgData = imgPack

const Ficha = ({ categoria }) => {

  const [activeArray, setActiveArray] = useState(imgData['0']);
  const [imgPos, setImgPos] = useState(['0','1','2'])
  let activeImg = ['0','1','2'];
  let activeLength = imgData[0].images.length;

  function useInterval(callback, delay) {
    const savedCallback = useRef();
   
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
   
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const changeExcludedValues = () => {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    let arrToExclude = []
    activeLength = imgData[ind].images.length;
    for (let index = 0; index < activeLength; index++) {
      arrToExclude.push(index.toString());
    }
    arrToExclude = _.difference(arrToExclude, activeImg);

    return arrToExclude;
  }
  const changeImg = () => {
    let excludedCopy = changeExcludedValues();
    let newImgArray = [];

      newImgArray = activeImg.map((img) => {
        const newVal = _.sample(excludedCopy);
        
        excludedCopy.push(img)
        excludedCopy.splice(excludedCopy.indexOf(newVal),1)
        
        return newVal
      })
      activeImg = newImgArray
    setImgPos(newImgArray)
  }

  //cambio de imagenes
  useInterval(() => {
    changeImg();
  }, 2500)

  useEffect(()=> {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    setActiveArray(imgData[ind])
    changeExcludedValues();
    activeImg = ['0','1','2']
    setImgPos(['0','1','2'])
  },[categoria])

  return (
    <div className='ficha'>
      <div className='prim-part'>
        <motion.img className='img1' src={activeArray.images[imgPos[0]]} alt='img1'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1.2, ease: 'easeOut'}}
/>
      </div>
      <div className='seg-part'>
        <motion.img src={activeArray.images[imgPos[1]]} alt='img2'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1.2, ease: 'easeOut'}}
        />
        <motion.img src={activeArray.images[imgPos[2]]} alt='img3'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1.2, ease: 'easeOut'}}
        />
      </div>
    </div>
  )
}

export default Ficha