import React, {useEffect, useState} from 'react'
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

  const changeExcludedValues = () => {
    let arrToExclude = [...excludedValues]
    for (let index = 0; index < activeArray.images.length; index++) {
      arrToExclude.push(index.toString());
    }
    arrToExclude = _.difference(arrToExclude, activeImg);
    excludedValues = arrToExclude;
  }
  const changeImg = () => {
    let excludedCopy = excludedValues

    const newImgArray = activeImg.map((img) => {
      const newVal = _.sample(excludedValues);
      excludedCopy.splice(excludedCopy.indexOf(newVal),1)
      excludedCopy.push(img)
      return newVal
    })
    excludedValues = excludedCopy
    activeImg = newImgArray
    setImgPos(newImgArray)
    console.log(excludedValues)
    console.log(newImgArray)

  }

  useEffect(()=>{
    const imgHeight = document.querySelector('.prim-part').clientHeight;
    setCustomHeight(imgHeight);
  }, [customHeight])

  useEffect(()=> {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    setActiveArray(imgData[ind])
    changeExcludedValues();
    setInterval(() => {
      changeImg();
    }, 3000);
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