import React from 'react';
import Card from '../components/ActorCard';
import { juanaPena, silviaRodriguez, juanaSolis, irmaOrgen  } from "../assets"
import { madreJuanaMaria, madreSilviaRodriguez, madreJuanaSolis, hijaIrmaOrgen } from '../media';

// Asegúrate de tener las imágenes y URLs de los videos

const Gallery = () => {
  const cardsData = [
    { image: juanaPena, name: 'Juana María Peña', role: 'José Peña (hermano), Jesús Castillo (esposo)', videoUrl: madreJuanaMaria, colorTheme: 'yellow' },
    { image: silviaRodriguez, name: 'Silvia Rodríguez', role: 'Claudia Rizada (hija)', videoUrl: madreSilviaRodriguez, colorTheme: 'yellow' },
    { image: juanaSolis, name: 'Juana Solis Barrios', role: 'Brenda González (hija)', videoUrl: madreJuanaSolis, colorTheme: 'yellow' },
    { image: irmaOrgen, name: 'Irma Orgen', role: 'Marco A. Orgen (padre)', videoUrl: hijaIrmaOrgen, colorTheme: 'yellow' },
    
    // Agrega más objetos según los datos que tengas
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-[920px] items-center mx-auto">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Gallery;
