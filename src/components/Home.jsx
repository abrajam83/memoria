import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Fondo } from '../assets';
import { Footer } from "../components";

const Home = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative">

      <div className="h-screen bg-parallax justify-center items-center"
        style={{
          transform: `translateY(${offset * 0.3}px)`, // Ajusta el factor (0.5) para la velocidad del desplazamiento
        }}>
      </div>

      <div className="h-screen flex items-center justify-center snap-start relative z-10 bg-palePink">

        <div className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: -1 }}>
          <img
            src={Fondo}
            alt="Background"
            className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="max-w-[1280px] mx-auto grid md:grid-cols-6 gap-4 px-10 pt-[110px]">
          <h1 className='row-start-1 md:col-span-2 font-fira font-bold text-2xl text-redBase leading-tight'>Tu memoria y mi voz <br /> <span className='font-fira text-base font-normal text-darkBlue'>Narrativas de la desaparición en México </span></h1>
          <p className='row-start-2 font-fira font- text-lg md:row-start-1 md:col-start-3 md:col-span-3 leading-relaxed pr-3'>Esta plataforma busca contribuir a la recuperación y construcción de la memoria individual
            y colectiva de comunidades y poblaciones que han sido víctimas directas e indirectas de la desaparición de personas en México.  <br /><br />
            “Tu memoria y mi voz. Narrativas de la desaparición de personas en México” es la recopilación y socialización de algunas de las voces que
            permanecen en la búsqueda de las más de 61 mil personas desaparecidas en el país: familias que interrumpen y transforman sus proyectos de
            vida para exigir justicia y verdad, pero también activistas, organizaciones, y personas expertas que acompañan en el camino. <br /><br />
            Las familias de personas desaparecidas tienen derecho a la verdad y también a contar su historia y los impactos que la desaparición de
            sus familiares ha dejado en su vida. Es necesario recordar que las violaciones graves a nuestros derechos, dejan huellas profundas y que
            este tipo de actos deben de dejar de ocurrir.</p>
        </div>
      </div>

      <div className="div">
        <Footer />
      </div>

    </section>
  );
};

export default Home;

//Propiedades para una imagen fija en el fondo
//<div className=" h-[750px] justify-center items-center bg-parallax overflow-y-scroll bg-fixed bg-cover bg-no-repeat bg-center bg-attachment-fixed"> </div>