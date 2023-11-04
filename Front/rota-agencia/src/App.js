import React from 'react';
import Nav from './Componentes/Nav';
import Footer from './Componentes/Footer';
import ContactForm from './Componentes/ContactForm';
import Header from './Componentes/Header';
import Hacemos from './Componentes/Hacemos';
import Trabajos from './Componentes/Trabajos';

function App() {
  return (
    <div className="bg-principal min-h-screen">
      <div className="container mx-auto p-4">
        <Nav />
        <Header />
        <Hacemos />
        <Trabajos />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
