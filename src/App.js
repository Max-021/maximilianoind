import React from 'react';
import './sass/App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Auxiliary from './hoc/Auxiliary'
import Navbar from './components/navBar/Navbar';
import Portada from './sections/Portada';
import Indumentaria from './sections/Indumentaria';
import Contacto from './sections/Contacto';


function App() {
  return (
    <Auxiliary>
      <Navbar/>
      <>
        <Portada/>
        <Indumentaria/>
        <Contacto/>
      </>
    </Auxiliary>
    );
}

export default App;
