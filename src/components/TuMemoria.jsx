import React from 'react'
import { Footer, Personas } from "../components";
import { vocesAcompanan, tu } from '../assets';

const TuMemoria = () => {
  return (
    <section id="voces-que-acompañan" className='relative'>
      {/* Contenedor de fondo */}
      <div className="bg-paleBlue min-h-[109vh] w-full absolute top-0 left-0 -z-10"></div>

      {/* Contenedor principal del contenido */}
      <div className="h-[1000px] flex items-center justify-center relative z-10">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-6 gap-4 px-10 mb-20">

          <img
            src={tu}
            alt='memoria'
            className='flex row-start-1 row-span-2 md:col-start-1 h-[200px] justify-self-end'
          />
          <h2 className='font-fira text-lg text-redBase font-bold row-start-1 md:col-start-2 self-end'>
            MEMORIA
          </h2>

          <h2 className='font-fira md:row-start-2 md:col-start-2'>
            Un espacio de <br /> recuerdo y dignidad <br /> para quienes hoy<br /> nos faltan.
          </h2>
          <p className='font-fira text-lg md:row-start-2 md:col-start-3 md:col-span-3 leading-relaxed'>
            El presente memorial, es un homenaje que expresa recuerdos y la huella indeleble que enfatiza la ausencia.
            A todas aquellas personas que han sido víctimas de la desaparición en México, sus familiares, amigas y amigos,
            nuestra total solidaridad, apoyo y respeto.<br /><br />

            Aquí, cada retrato honra la vida, los sueños y la esencia de las personas desaparecidas, manteniéndolos presentes
            en nuestra memoria colectiva. Este homenaje nos invita a no olvidar, a compartir su historia y a reafirmar nuestro
            compromiso con la verdad.
          </p>

          <div className='bg-redBase h-[2px] w-[30px] md:row-start-3 md:col-start-3 md:col-span-1 my-5'></div>

          <p className='row-start-4 font-fira text-lg text-darkBlue italic md:row-start-4 md:col-start-3 md:col-span-3 leading-relaxed'>
            Tu memoria y mi voz, es un memorial vivo que alimentamos entre todas y todos.
            Si eres familiar de una persona desaparecida, queremos escucharte.
            Suma tu voz y habla por la memoria y la justicia.
          </p>
        </div>
      </div>

      <div className="z-20">
        <Personas />
      </div>


      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>



    </section>
  );
};

export default TuMemoria;
