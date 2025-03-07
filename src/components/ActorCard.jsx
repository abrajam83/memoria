import React, { useState, useEffect } from 'react';
import { closeCircle } from '../assets';
import clsx from 'clsx';

const Card = ({ image, name, role, videoUrl, colorTheme = 'red' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleVideoOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Agregar el event listener para la tecla "Esc"
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // Define clases de color basadas en el tema
    const themes = {
        red: {
            bg: 'bg-redBase',
            hoverBg: 'hover:bg-redLight',
            textHover: 'group-hover:text-darkBlue',
            pleca: 'bg-mediumYellow',
            plecaHover:'group-hover:bg-redBase',

        },
        yellow: {
            bg: 'bg-mediumYellow',
            hoverBg: 'hover:bg-paleYellow',
            textHover: 'group-hover:text-darkBlue',
            pleca: 'bg-darkBlue',
            plecaHover:'group-hover:bg-redBase',

        },
        blue: {
            bg: 'bg-lightBlue',
            hoverBg: 'hover:bg-paleBlue',
            textHover: 'group-hover:text-darkBlue',
            pleca: 'bg-mediumYellow',
            plecaHover:'group-hover:bg-redBase',
        }
    };

    const { bg, hoverBg, textHover, pleca, plecaHover } = themes[colorTheme] || themes.red;

    return (
        <div onClick={handleVideoOpen} className={clsx(bg, 'group relative cursor-pointer transition-all duration-500', hoverBg, plecaHover)}>
        {/* Contenedor de la imagen en el fondo */}
        <div className="relative h-[250px] overflow-hidden">
            <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    
        {/* Contenedor con nombre y cargo */}
        <div className={clsx('relative p-6 h-[270px] flex flex-col z-10 transition-colors duration-100', hoverBg)}>
            <div>
                <h3 className={clsx('text-xl text-white font-semibold font-fira mb-8 mt-3 group-hover:', textHover)}>
                    {name}
                </h3>
                {/* Asegurarse de que la pleca tenga las clases correctas de hover */}
                <div className={clsx('h-[3px] w-[30px] my-3 mb-8', pleca, 'group-hover:', plecaHover)}></div>
            </div>
            <p className={clsx('text-base font-fira text-white', 'group-hover:', textHover)}>{role}</p>
        </div>
    

            {isOpen && (
                <div
                    className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleClose}
                >
                    <div
                        className="relative  w-auto h-[800px] bg-black overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Evita el cierre al hacer clic dentro del video
                    >
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full max-w-[1280] object-contain"
                            
                        />

                        {/* Ícono de cerrar dentro del contenedor de video */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 bg-black bg-opacity-30 rounded-full p-1"
                        >
                            <img
                                src={closeCircle}
                                alt="Cerrar"
                                className="w-8 h-8"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
