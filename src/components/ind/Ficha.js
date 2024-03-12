import React, {useEffect} from 'react'

const Ficha = ({name, descr}) => {
  const importImages = (context) => {
    return context.keys().map(context)
  }
  let images = '';
  useEffect(() => {
    // const imgContext = require.context(`../../assets/images/ind/${name.toLowerCase()}`,false,/\.(png|jpe?g|svg)$/);
    const imgContext = require.context(`../../assets/images/ind/test`,false,/\.(png|jpe?g|svg)$/);
    images = importImages(imgContext);
  },)

  return (
    <div className='ficha'>
      <div className='prim-part'>
        <img src={require('../../assets/images/ind/test/IMG_20240108_141551145.jpg')} alt='img1' className='big-img'/>
        {console.log(images)}
      </div>
      <div className='seg-part'>
        <img src={require('../../assets/images/ind/test/IMG_20240108_142029316.jpg')} alt='img2' className='sm-img'/>
        <img src={require('../../assets/images/ind/test/IMG_20240108_141907667_MP.jpg')} alt='img3' className='sm-img'/>
      </div>
    </div>
  )
}

export default Ficha