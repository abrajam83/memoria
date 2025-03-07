import React from 'react'
import { logoArlenica, logoEnfoque, logoSimo, logoUsaid, Facebook, Twitter, Youtube, Instagram } from '../assets'

const Footer = () => {
    return (
        <div className='bg-white max-w-[1280px] relative p-10 h-[600px] mx-auto'>


            <h1 className='flex font-fira font-bold text-xl items-center justify-center mt-10'>Tu memoria y mi voz, narrativas de la desaparición en México</h1>
            <p className='flex font-fira font-normal text-base items-center justify-center pt-8 text-center mx-auto mt-10 '>La plataforma “Tu memoria y mi voz” fue desarrollada por SIMO Consulting y Arlenica gracias al generoso apoyo
                del pueblo de los Estados Unidos, a través de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID).
                La información cuantitativa y cualitativa presentada es responsabilidad exclusiva de las organizaciones y no
                necesariamente refleja el punto de vista de USAID o del Pueblo de los Estados Unidos.</p>

                <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 justify-center items-center py-8 gap-4 mt-10 ">
        {/* Logos */}
        <img
          src={logoUsaid}
          alt="Usaid"
          className="md:col-start-1 h-[2rem] md:h-[3rem] lg:h-[3.5rem] w-auto mx-auto" // Cambia de tamaño en puntos de ruptura
        />
        <img
          src={logoEnfoque}
          alt="Enfoque DH"
          className="md:col-start-2 h-[2rem] md:h-[3rem] lg:h-[3.5rem] w-auto mx-auto"
        />
        <img
          src={logoSimo}
          alt="Simo"
          className="md:col-start-3 h-[3.5rem] md:h-[4.5rem] lg:h-[5rem] w-auto mx-auto"
        />
        <img
          src={logoArlenica}
          alt="Arlenica"
          className="md:col-start-4 h-[3.5rem] md:h-[4.5rem] lg:h-[5rem] w-auto mx-auto"
        />

<div className="flex flex-row justify-center items-center gap-8  mt-20 col-start-2 col-span-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook icon" className="fill-slate-500" width={32} height={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram icon" className="text-slate-700" width={32} height={32} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="Linkedin icon" className="text-slate-700" width={32} height={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter icon" className="text-slate-700" width={32} height={32} />
            </a>
          </div>

      </div>

        </div>
    )
}

export default Footer