import React, {useEffect, useState, useRef} from 'react'
import _ from 'lodash'

//array of objects with a property that has an array of images
import {imgPack} from './imagesLoader'

const imgData = imgPack

const Ficha = ({ categoria }) => {
  
  const [customHeight, setCustomHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0)

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
    arrToExclude = _.difference(arrToExclude, activeImg);

    excludedValues = arrToExclude;
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
    excludedValues = excludedCopy
    setImgPos(newImgArray)
  }

  //cambio de imagenes
  useInterval(() => {
    changeImg();
  }, 3000)

  useEffect(()=>{

    setWindowWidth(window.screen.width);
    setCustomHeight(document.querySelector('.img1').clientHeight)

    window.addEventListener('resize', () => {
      setWindowWidth(window.screen.width)
    })
    window.addEventListener('resize', () => {
      const imgHeight = document.querySelector('.img1').clientHeight;
      setCustomHeight(imgHeight);
    })
  }, [])

  useEffect(()=>{
    const imgHeight = document.querySelector('.img1').clientHeight;
    setCustomHeight(imgHeight);
  },customHeight)

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
        <img className='img1' src={activeArray.images[imgPos[0]]} alt='img1'/>
      </div>
      <div className='seg-part'>
        <img src={activeArray.images[imgPos[1]]} style={{height: windowWidth > 600 ? `${customHeight/2 - 16}px` : 'auto'}} alt='img2'/>
        <img src={activeArray.images[imgPos[2]]} style={{height: windowWidth > 600 ? `${customHeight/2 - 16}px` : 'auto'}} alt='img3'/>
      </div>
    </div>
  )
}

export default Ficha