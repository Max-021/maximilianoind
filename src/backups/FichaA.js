import React, {useEffect, useState, useRef} from 'react'
import _ from 'lodash'

//array of objects with a property that has an array of images
import {imgPack} from './imagesLoader'

const imgData = imgPack

const Ficha = ({ categoria }) => {
  
  const [customHeight, setCustomHeight] = useState(0);

  const [activeArray, setActiveArray] = useState(imgData['0']);
  const [imgPos, setImgPos] = useState(['0','1','2'])
  let activeImg = ['0','1','2'];
  let excludedValues = []
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
    console.log(activeImg+'     activeimg')
    arrToExclude = _.difference(arrToExclude, activeImg);
    console.log('arrtoexclude       '+arrToExclude)
    excludedValues = arrToExclude;
    return arrToExclude;
    //acá cambiarlo para que esta funcion devuelva (return) un array con lo que necesito en vez de modificarlo
  }
  const changeImg = () => {
    let excludedCopy = changeExcludedValues();
    // let excludedCopy = excludedValues
    console.log('after copy    '+excludedCopy)

    const newImgArray = activeImg.map((img) => {
      const newVal = _.sample(excludedCopy);
      // console.log('newval  ' +  newVal)
      excludedCopy.push(img)
      // console.log(excludedCopy)
      // console.log(excludedCopy.indexOf(newVal))
      excludedCopy.splice(excludedCopy.indexOf(newVal),1)
      // console.log(excludedCopy)
      return newVal
    })
    console.log('newimgarr       '+newImgArray)
    excludedValues = excludedCopy
    activeImg = newImgArray
    setImgPos(newImgArray)
    // console.log('excluded values   '+excludedValues)
    // console.log(excludedCopy)
  }

  //cambio de imagenes
  useInterval(() => {
    // changeExcludedValues();
    changeImg();
  }, 3000)

  useEffect(()=>{
    const imgHeight = document.querySelector('.prim-part').clientHeight;
    setCustomHeight(imgHeight);
  }, [customHeight])
  useEffect(()=> {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    setActiveArray(imgData[ind])
    // excludedValues = changeExcludedValues();
    changeExcludedValues();
    activeImg = ['0','1','2']
    setImgPos(['0','1','2'])
  },[categoria])

  return (
    <div className='ficha'>
      <div className='prim-part'>
        <img src={activeArray.images[imgPos[0]]} alt='img1' className='big-img'/>
      </div>
      <div className='seg-part' style={{height: customHeight}}>
        <img src={activeArray.images[imgPos[1]]} alt='img2' className='sm-img'/>
        <img src={activeArray.images[imgPos[2]]} alt='img2' className='sm-img'/>
      </div>
    </div>
  )
}

export default Ficha