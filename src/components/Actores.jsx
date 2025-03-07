import React from 'react';
import Card from '../components/ActorCard';
import { actorAlma, actorCesar, actorDaniel, actorJeremy, actorLuis, actorLuisRios, actorMaria, actorVolga, actorIxchel  } from "../assets"
import { AlmaGarcia, CesarPerez, DanielZapico, JeremyRenaux, LuisaAguilar, LuisRios, LuisTapia, VolgaPina, IxchelCisneros } from '../media';

// Asegúrate de tener las imágenes y URLs de los videos

const Gallery = () => {
  const cardsData = [
    { image: actorLuis, name: 'Luis Tapia', role: 'Coordinador del Área Jurídica del Centro de Derechos Humanos Miguel Agustín Pro Juárez', videoUrl: LuisTapia, colorTheme: 'red' },
    { image: actorLuisRios, name: 'Luis E. Ríos', role: 'Director General de la Academia Interamericana de Derechos Humanos', videoUrl: LuisRios, colorTheme: 'red' },
    { image: actorMaria, name: 'María Luisa Aguilar', role: 'Colaboradora del Área Internacional del Centro de Derechos Humanos Miguel Agustín Pro Juárez', videoUrl: LuisaAguilar, colorTheme: 'red' },
    { image: actorIxchel, name: 'Ixchel Cisneros', role: 'Directora de El día Después', videoUrl: IxchelCisneros, colorTheme: 'red' },
    { image: actorJeremy, name: 'Jérémy Renaux', role: 'Subdirector de IDHEAS Litigio Estratégico en Derechos Humanos A.C.', videoUrl: JeremyRenaux, colorTheme: 'red' },
    { image: actorCesar, name: 'César Pérez', role: 'Director Ejecutivo del Centro de Justicia para la Paz y el Desarrollo A.C.', videoUrl: CesarPerez, colorTheme: 'red' },
    { image: actorAlma, name: 'Alma García', role: 'Directora de Programa de Seguridad Ciudadana y Derechos Humanos del Centro de Colaboración Cívica', videoUrl: AlmaGarcia, colorTheme: 'red' },
    { image: actorDaniel, name: 'Daniel Zapico', role: 'Oficial de Derechos Humanos de la Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos', videoUrl: DanielZapico, colorTheme: 'red' },  
    { image: actorVolga, name: 'Volga de Pina', role: 'Coordinadora de la Maestría de Derechos Humanos y Democracia de la Facultad Latinoamericana de Ciencias Sociales', videoUrl: VolgaPina, colorTheme: 'red' },
    
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
