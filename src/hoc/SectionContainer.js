import React, {useEffect, useState}  from 'react'

const SectionContainer = (props) => {
  const [customHeight, setCustomHeight] = useState(0); 
  const responsiveSize = 900;

  const adjustResponsivePadding = () => {
    if(window.innerWidth < responsiveSize) {
      setCustomHeight(0)
    } else{
      const navHeight = document.querySelector('.nav-container').clientHeight;
      setCustomHeight(navHeight)
    }
  }

  useEffect(()=> {
    const initialNavHeight = document.querySelector('.nav-container').clientHeight;
    window.addEventListener('resize', adjustResponsivePadding);
      if(window.innerWidth < responsiveSize) {
        setCustomHeight(0)
      } else {
        setCustomHeight(initialNavHeight);        
      }
  }, [])

  return (
    <>
        <div className={props.claseSeccion} id={props.nombreSeccion} style={{paddingTop:`${customHeight}px`, minHeight: `calc(100vh - ${customHeight}px)`}}>
          {
            props.nombreSeccion === 'indumentaria' ?
            <div className='shadow-ind-bkg' style={{marginTop: `-${customHeight}px`}}></div>
            :
            null
          }
            {props.children}
        </div>    
    </>
  )
}

export default SectionContainer