import React from 'react'
import { Footer, ActorCard, Familiares } from "../components";
import { vocesAcompanan } from '../assets';

const VocesQueAcompanan = () => {
  return (
    <section id="voces-que-acompañan" className='relative'>
      {/* Contenedor de fondo */}
      <div className="bg-paleBlue min-h-[109vh] w-full absolute top-0 left-0 -z-10"></div>
        
        {/* Contenedor principal del contenido */}
        <div className="h-[1000px] flex items-center justify-center relative z-10">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-6 gap-4 px-10 mb-20">
            
            <img
              src={vocesAcompanan}
              alt='Voces que acompañan'
              className='flex row-start-1 row-span-2 md:col-start-1 h-[200px] justify-self-end'
            />
            <h2 className='font-fira text-lg text-redBase font-bold row-start-1 md:col-start-2 self-end'>
              QUE SE QUEDAN
            </h2>

            <h2 className='font-fira md:row-start-2 md:col-start-2'>
            Familias que no se detienen en la <br/>búsqueda de <br/>la verdad.
            </h2>
            <p className='font-fira text-lg md:row-start-2 md:col-start-3 md:col-span-3 leading-relaxed'>
            Las voces que se quedan son las que claman además de búsqueda, justicia y reparación, son aquellas que
            han frenado su proyecto de vida para dedicarlo a conocer el paradero de su hijo, su hija, su madre,
            su padre o su hermano y hermana. Son las miles de familias en México que no se detienen y buscan para
            conocer la verdad y las que nunca silenciaran el recuerdo de su familiar desaparecido.
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
        <Familiares />
      </div>


      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>

     

    </section>
  );
};

export default VocesQueAcompanan;
