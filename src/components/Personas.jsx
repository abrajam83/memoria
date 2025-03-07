import React from 'react';
import Card from '../components/ActorCard';
import { alejandroA, alejandroT, ruben, oscar, marco, jesus, gerzain, damaris, claudia, bonifacio } from "../assets"
import { alejandroAvalos, alejandroTrinidad, bonifacioUribe, gerzainBarron, marcoOrgen, brendaDamaris, claudiaRizada, jesusCastillo, oscarLopez, rubenLimon } from '../media';

// Asegúrate de tener las imágenes y URLs de los videos

const Gallery = () => {
  const cardsData = [
    { image: alejandroA, name: 'David A. Avalos Rodríguez', role: 'Desaparecido el 24 de octubre 2014 <br /> en Zapopan, Jalisco', videoUrl: alejandroAvalos, colorTheme: 'blue' },
    { image: bonifacio, name: 'Bonifacio Uribe Téllez', role: 'Desaparecido el 29 de abril 2016 en Huachinango, Puebla', videoUrl: bonifacioUribe, colorTheme: 'blue' },
    { image: alejandroT, name: 'Alejandro Trinidad Escobedo', role: 'Desaparecido el 11 de mayo 2013 en Tequila, Jalisco', videoUrl: alejandroTrinidad, colorTheme: 'blue' },
    { image: oscar, name: 'Oscar A. López Enamorado', role: 'Desaparecido en enero 2010 en Puerto Vallarta, Jalisco', videoUrl: oscarLopez, colorTheme: 'blue' },
    { image: jesus, name: 'Jesús F. Castillo Gallegos', role: 'Desaparecido el 13 de marzo 2011 en Saltillo, Coahuila', videoUrl: jesusCastillo, colorTheme: 'blue' },
    { image: damaris, name: 'Brenda D. González Solís', role: 'Desaparecida el 31 de julio 2011 en Santa Catarina, Nuevo León', videoUrl: brendaDamaris, colorTheme: 'blue' },
    { image: marco, name: 'Marco A. Orgen Maldonado', role: 'Desaparecido el 17 de noviembre 2013 en Huachinango, Puebla', videoUrl: marcoOrgen, colorTheme: 'blue' },
    { image: claudia, name: 'Claudia Rizada Rodríguez', role: 'Desaparecida el 28 de junio 2011 en Saltillo, Coahuila', videoUrl: claudiaRizada, colorTheme: 'blue' },  
    { image: gerzain, name: 'Gerzahín Barrón González', role: 'Desaparecido el 8 de mayo 2020 en Huachinango, Puebla', videoUrl: gerzainBarron, colorTheme: 'blue' },
    
    // Agrega más objetos según los datos que tengas
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[1280px] items-center mx-auto">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Gallery;
