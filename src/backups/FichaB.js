import React, {useEffect, useState, useRef} from 'react'
import _ from 'lodash'

//array of objects with a property that has an array of images
import {imgPack} from './imagesLoader'

const imgData = imgPack

const Ficha = ({ categoria }) => {
  
  const [customHeight, setCustomHeight] = useState(0);

  const [activeArray, setActiveArray] = useState(imgData['0']);
  const [imgPos, setImgPos] = useState(['0','1','2'])
  let arrOfPositions = []
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
  const resetArray = () => {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    activeLength = imgData[ind].images.length;
    for (let index = 0; index < activeLength; index++) {
      arrOfPositions.push(index);
    }
    console.log(arrOfPositions)
  }

  const changeShownImg = (posArr) => {
    console.log(posArr)
    setImgPos( _.shuffle(posArr).slice(0,3));
    // console.log(newArr)
  }

  //cambio de imagenes
  useInterval(() => {
    changeShownImg(arrOfPositions);
  }, 3000)

  useEffect(()=>{
    const imgHeight = document.querySelector('.prim-part').clientHeight;
    setCustomHeight(imgHeight);
  }, [customHeight])

  useEffect(()=> {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    setActiveArray(imgData[ind])
    setImgPos(['0','1','2'])
    resetArray();
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