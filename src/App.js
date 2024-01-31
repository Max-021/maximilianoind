import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './sass/App.scss'

import Auxiliary from './hoc/Auxiliary'
import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';
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
      <Footer/>
    </Auxiliary>
    );
}

export default App;
