import React from 'react'
import { motion } from 'framer-motion';
import Slider from 'react-slick'

import img1 from '../../assets/images/landpage.jpg'
import img2 from '../../assets/images/ind-bkg.jpg'
import img3 from '../../assets/images/mapa-contacto.png'

const imgArr = [img1,img2,img3];

const Carousel = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <div>
              <img className='slider-img-icon' src={imgArr[i]} alt={`icon${i}`}/>
            </div>
          );
        },
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <motion.div className="slider"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1, ease: 'easeOut'}}
        >
          <Slider {...settings}>
            {imgArr.map((data, index) => {
              return ( 
                <div>
                  <img className='slider-img' src={data} alt={`img${index}`} key={index}/>
                </div>
                )
            })}
          </Slider>
        </motion.div>
      );
}

export default Carousel