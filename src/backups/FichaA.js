import React, {useEffect, useState} from 'react'
import _ from 'lodash'

import {imgPack} from './imagesLoader'

const imgData = imgPack

const Ficha = ({ categoria }) => {
  
  const [customHeight, setCustomHeight] = useState(0);

  const [activeArray, setActiveArray] = useState(imgData['0']);
  const [activeImg, setActiveImg] = useState(['0','1','2']);
  const [excludedValues, setExcludedValues] = useState([]);

  const changeExcludedValues = () => {
    let arrToExclude = [...excludedValues]
    for (let index = 0; index < activeArray.images.length; index++) {
      arrToExclude.push(index.toString());
    }
    arrToExclude = _.difference(arrToExclude, activeImg);
    setExcludedValues(arrToExclude)
    console.log('exluded values')
    console.log(excludedValues)
  }
  const changeImg = () => {
    let excludedCopy = excludedValues
    const imgArrayCopy = activeImg;
    const newImgArray = [];

    console.log('excluded copy before mapping')
    console.log(excludedCopy)

    imgArrayCopy.map((img) => {

      const newVal = _.sample(excludedValues);
      excludedCopy.splice(excludedCopy.indexOf(newVal),1)
      excludedCopy.push(img)
      newImgArray.push(newVal)
    })
    console.log('excluded copy')
    console.log(excludedCopy)
    console.log('excludedvalue')
    setExcludedValues([...excludedCopy])
    console.log(excludedValues)
    return newImgArray
  }

  useEffect(()=>{
    const imgHeight = document.querySelector('.prim-part').clientHeight;
    setCustomHeight(imgHeight);
    const interval = setInterval(() => {
      setActiveImg(changeImg())
      // console.log('active img')
      // console.log(activeImg)
    }, 3000);
    console.log('primer useefefct')
    return () => clearInterval(interval)
  }, [])

  useEffect(()=> {
    const ind = imgData.map(cat => cat.catName).indexOf(categoria)
    setActiveArray(imgData[ind])
    // setActiveImg(['0','1','2'])
    changeExcludedValues();
  },[categoria])

  return (
    <div className='ficha'>
      <div className='prim-part'>
        <img src={activeArray.images[activeImg[0]]} alt='img1' className='big-img'/>
      </div>
      <div className='seg-part' style={{height: customHeight}}>
        <img src={activeArray.images[activeImg[1]]} alt='img2' className='sm-img'/>
        <img src={activeArray.images[activeImg[2]]} alt='img2' className='sm-img'/>
      </div>
    </div>
  )
}

export default Ficha