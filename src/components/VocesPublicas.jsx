import React, { useState, useEffect } from "react";
import MapChart from "../components/MapaInteractivo";
import { Footer, AnalisisNarrativas, DetalleEstado, ListaMedios } from "../components"; // Nuevo componente
import { vocesAcompanan } from "../assets";
import { BeatLoader } from 'react-spinners';

const estadoToCve = {
  Jalisco: "14",
  "Nuevo León": "19",
  Chihuahua: "08",
  Durango: "10",
  Coahuila: "05",
  Veracruz: "30",
  Tamaulipas: "28",
};

// Datos ficticios para medios y narrativas
const stateData = {
  "14": {
    name: "Jalisco",
    notes: 26436,
    media: [
      "Jalisco Rojo",
      "Notisistema",
      "Mural",
      "Crónica de Jalisco",
      "El Occidental",
      "Telediario Guadalajara",
      "Informador",
    ],
    narrative: [`En el caso del estado de Jalisco, para el análisis global en todos sus periodos de tiempo (2006-2020) no fue posible identificar una estructura narrativa consistente de elementos que soporten la hipótesis uno que habla de la negación del problema.`,

      `Sin embargo, como se observa en el siguiente grafo, la narrativa de las autoridades en torno a la desaparición de personas parece estar dirigida sobre todo al fenómeno de la trata de personas: resaltan términos como “tratantes”, “chicas”, “explotación”, y “mujer” “víctima.” No obstante, este discurso parece sólo aplicarse para los años 2018 y 2019 durante el gobierno del gobernador Enrique Alfaro.`,

      `Resalta que a comparación de otros estados, en el análisis global, la caracterización de las personas desaparecidas no se identifican a hombres y jóvenes, sino que, como se especificó anteriormente, son “mujeres” y “chicas” las principales características de las personas víctimas de desaparición.`,

      `El problema de la trata de personas, en específico cuando las víctimas son mujeres, es un tema que emerge durante los últimos períodos de tiempo. Mismo que también se ha identificado en el análisis de las narrativas de otros estados, por lo que resulta relevante la propagación de este fenómeno en los discursos, pues la trata de personas es por definición un problema intrínseco a la desaparición.`,],
  },

  "19": {
    name: "Nuevo León",
    notes: 53460,
    media: [
      "ABC Noticias",
      "El Regio",
      "El Horizonte",
      "El Norte",
    ],
    narrative: [`Las principales narrativas que se identificaron para la hipótesis uno de manera global en todos sus periodos de tiempo (2006-2020) son tres. La primera refiere al posicionamiento de las autoridades y gobierno –o discurso oficial –en torno a la desaparición, mismo que será analizado en cada uno de los períodos específicos. Por ejemplo, el primero corresponde al “no-pasó” o “no-hay-datos”, es decir que aborda de alguna manera la negación al fenómeno de las desapariciones de personas. Esta narrativa, principalmente tuvo lugar durante el sexenio de Felipe Calderón. La segunda apunta hacia la realización de investigaciones relacionadas con violaciones a derechos humanos, pero no concretamente referidas a desapariciones. Este discurso se dio sobre todo en la administración de Enrique Peña Nieto.`,

      `Por otro lado, la tercera narrativa, la cual responde a la de las familias, se basa esencialmente en casos de “jóvenes” “hijos” que desaparecieron y que después, sólo se hallaron sus cuerpos. Esto se vio reflejado durante el período de la guerra contra el crimen organizado de Calderón, es decir, un posicionamiento que surgió también a partir de 2006 y se mantuvo en los siguientes períodos.`,

      `En este análisis la caracterización de las personas desaparecidas fue sobre todo “hijos- jóvenes”, sin embargo durante el período 2009-2011 destacó el cambio en la narrativa respecto al tema de mujeres desaparecidas, quizá provocado por el nombramiento de Arturo Chávez Chávez como Procurador de la República, quien con anterioridad ocupó el puesto de fiscal durante los períodos más críticos de los feminicidios en el estado de Chihuahua.`,

      `Por último, paralelamente a la narrativa de las familias, resalta la presencia de “Ibarra”, haciendo referencia a la importancia simbólica que representa en Monterrey la figura de Rosario Ibarra de Piedra en la búsqueda de personas desaparecidas en el contexto de la guerra sucia.`,],
  },

  "08": {
    name: "Chihuahua",
    notes: 16259,
    media: [
      "El Heraldo de Chihuahua",
      "El Diario de Juárez",
      "El Diario de Chihuahua",
      "Crónica de Chihuahua",
      "Norte Digital",
    ],
    narrative: [`Esta hipótesis discursiva identificó narrativas que negaran la problemática de la desaparición bajo la premisa de que las autoridades tendrían incentivos para negar un fenómeno de esta naturaleza. Por tal motivo, se articuló en torno a términos que negaran la ocurrencia de dicho fenómeno de forma genérica por parte de las entidades o autoridades responsables, bien porque planteaban situaciones en las que dicho acto se configurara como si no hubiera pasado, bien porque fuera algo sobre lo que no hay datos o simplemente, al cuestionar la solidez de la evidencia de quienes indican que hubo una problemática de esta naturaleza.`,],
  },

  "10": {
    name: "Durango",
    notes: 11313,
    media: [
      "La Voz de Durango",
      "El Siglo de Durango",
      "Periódico Victoria",
      "El Sol de Durango",
    ],
    narrative: [`En el caso del estado de Durango, para el análisis global en todos sus periodos de tiempo (2006-2020) la narrativa que se identificó por parte de las autoridades, particularmente, por la Procuraduría/Fiscalía, plantea dos argumentos: el primero es una negación tácita en el tema de la desaparición de personas mediante el uso del “no- pasó”, especialmente dirigida a contener los casos de hijos de familia y niños. La desaparición de infantes pocas veces se ha encontrado dentro de las narrativas oficiales.`,
      `Una segunda vertiente de la negación reduce los hechos que involucran a víctimas a sucesos que implican “golpes” o “víctimas golpeadas”, pero sin reconocer siquiera el intento de plagio. Por otro lado, una vertiente marginal de la misma narrativa, que aunque no tiene mucho peso, si resulta relevante por el tipo de víctima, pues implica la desaparición de personas “mayores”, que eventualmente son encontrados, ya sea muertos o con vida, pero en un contexto ajeno a la violencia.`,
      `Al hablar sobre la caracterización de las personas desaparecidas se hace referencia a “hijos” –sin especificar sexo –y de forma particular se caracteriza a las víctimas como ”niños” o “personas mayores”.`,
      `Por último, el fenómeno de la desaparición de personas en el estado de Durango, visto desde una perspectiva global, se presenta como un fenómeno muy localizado considerando campos como “municipal”, “alcalde” y “municipio”.`,],
  },

  "05": {
    name: "Coahuila",
    notes: 24602,
    media: [
      "Vanguardia",
      "El Heraldo de México",
      "Siglo de Torreón",
    ],
    narrative: [`Esta hipótesis discursiva identificó narrativas que negaran la problemática de la desaparición bajo la premisa de que las autoridades tendrían incentivos para negar un fenómeno de esta naturaleza. Por tal motivo, se articuló en torno a términos que negaran la ocurrencia de dicho fenómeno de forma genérica por parte de las entidades o autoridades responsables, bien porque planteaban situaciones en las que dicho acto se configurara como si no hubiera pasado, bien porque fuera algo sobre lo que no hay datos o simplemente, al cuestionar la solidez de la evidencia de quienes indican que hubo una problemática de esta naturaleza.`,],
  },

  "30": {
    name: "Veracruz",
    notes: 18070,
    media: [
      "Al Calor Político",
      "Oye Veracruz",
      "Diario de Xalapa",
      "La Jornada",
    ],
    narrative: [`Durante el sexenio de Calderón (del 2006 al 2011) y el gobierno de Fidel Herrera, los grafos analizados parecen indicar que el tema de desaparición era casi inexistente en la prensa estatal; pese a que los grafos son de simple visualización resultan relevantes puesto que corroboran la hipótesis de la negación del problema; como se observa en el grafo del lado izquierdo, las dos principales palabras cercanas a “persona” son plagio y secuestro, si bien se está reconociendo una acción criminal, como se verá en la hipótesis 2, no aparece ninguna otra palabra, que se pueda relacionar con el hecho de la desaparición, es decir, la narrativa en los medios impresos solo hacía alusión a estas actividades cuando sucedían casos de desaparición de personas.`,
      `En los siguientes dos años (2009 a 2011), incluso se eliminan de la narrativa, sin embargo, se observa la aparición de partidos políticos vinculados a estos eventos sobresale la figura del gobernador Fidel Herrera Beltrán y los partidos políticos PRI y PAN.`,],
  },

  "28": {
    name: "Tamaulipas",
    notes: 35378,
    media: [
      "El Sol de Tampico",
      "El Diario de Tampico",
      "El Mañana",
      "Valle del Norte",
    ],
    narrative: [`En el primer periodo de análisis (2006-2008) coexisten dos líneas discursivas dispares, una apegada a la visión global y otra parcialmente distante, lo cual dificulta la comprobación de la hipótesis de negación. Por un lado, la narrativa del Gobierno Federal a cargo del entonces presidente Felipe Calderón y la Secretaría de Seguridad Pública al mando de García Luna, reconoce eventuales secuestros o plagios dentro de los que destacan los casos de mujeres; sin embargo, afirman haber localizado a las personas, conduciéndose en un discurso de negación explícita del problema. Por otro lado, la autoridad local, liderada por el gobernador y autoridades municipales tanto del PRI como del PAN, acepta la existencia de “levantones” pero no se muestra como un hecho directamente ligado a una eventual desaparición.`,
      `A partir de lo anterior es posible afirmar que, si bien la narrativa de la autoridad local permite dilucidar el problema de la desaparición, desvía totalmente la discusión hacia el tema de los “levantones” como hechos aislados de la misma e imposibilita el cuestionamiento en torno al vínculo que podría existir entre ambos. Por ello, Felipe Calderón, García Luna y la autoridad local son los actores vinculados a una narrativa de negación, los primeros dos en un grado ligeramente mayor al tercero, impidiendo la caracterización de personas desaparecidas, refiriéndose a hombres y mujeres, pero siempre como víctimas de otros delitos.`,],
  },
  // Agrega aquí datos para otros estados si es necesario...
};


const VocesPublicas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedState, setSelectedState] = useState("14");
  const [data, setData] = useState(null);


// Simular una carga de datos
useEffect(() => {
  // Desactivar el scroll cuando está cargando
  document.body.style.overflow = "hidden";

  const fetchData = async () => {
    setTimeout(() => {
      setIsLoading(false); // Cambia el estado cuando los datos estén listos
    }, 2000); // Simulamos 2 segundos de carga
  };

  fetchData();

  // Restaurar el scroll solo después de que isLoading se haya actualizado
  return () => {
    document.body.style.overflow = "auto";
  };
}, []); // Este efecto solo se ejecutará una vez al montar el componente

useEffect(() => {
  // Si ya se ha cargado el contenido, restauramos el scroll
  if (!isLoading) {
    document.body.style.overflow = "auto";
  }
}, [isLoading]); // Este useEffect se ejecuta cada vez que isLoadi


  const handleSelectState = (cveEnt) => {
    setSelectedState(cveEnt);
  };


  return (
    <section id="voces-publicas" className="pt-[180px] relative">
     {isLoading ? (
        <div className="bg-darkBlue h-screen w-full absolute top-0 left-0 flex items-center justify-center z-50">
          <BeatLoader color="#F18E82" size={15} />
        </div>
      ) : (
        <div className="bg-paleBlue min-h-[60vh] w-full absolute top-0 left-0 -z-10"></div>
      )}
      {/* Contenido principal */}
      <div className="h-full flex items-center justify-center relative z-10">
     
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-6 gap-4 px-10 mb-52">
          <img
            src={vocesAcompanan}
            alt="Voces que acompañan"
            className="flex row-start-1 row-span-2 md:col-start-1 h-[200px] justify-self-end"
          />
          <h2 className="font-fira text-lg text-redBase font-bold row-start-1 md:col-start-2 self-end">
            PÚBLICAS
          </h2>
          <h2 className="font-fira md:row-start-2 md:col-start-2">
            Ánalisis desde <br />
            los medios de comunicación.
          </h2>
          <p className="font-fira text-lg md:row-start-2 md:col-start-3 md:col-span-3 leading-relaxed">
            La identidad es una construcción que se relata. Los medios de comunicación generan discursos mediáticos
            desde donde se construyen nuevas formas de pensar, ser y estar de los habitantes del país. Los medios de
            comunicación han funcionado como aliados, pero también como enemigos de la información que se ha compartido
            sobre la desaparición de personas, muchas veces esta información ha construido discursos de criminalización
            sobre las víctimas.
          </p>
        </div>
      </div>

      {/* Mapa e interacciones */}
      <div className="grid grid-cols-6 gap-2 max-w-[1280px] mx-auto ">
        {/* Indicador */}
        <div className="bg-redLight h-[80px] items-center mx-auto rounded-t-lg w-full row-start-1 col-span-6">
          <p className="flex font-fira font-medium text-lg text-darkBlue items-center my-auto h-full px-4">
            Por favor seleccione un estado
          </p>
        </div>

        {/* Botones de selección */}
        <div className="col-span-1 flex flex-col ">
          {Object.keys(estadoToCve).map((estado) => (
            <button
              key={estado}
              onClick={() => handleSelectState(estadoToCve[estado])}
              className={`py-2 px-4 font-fira text-lg font-semibold flex-1 ${estadoToCve[estado] === selectedState
                ? "bg-lightBlue text-darkBlue"
                : "bg-darkBlue2 text-white hover:bg-redLight hover:text-darkBlue"
                } border-b border-paleBlue`}
            >
              {estado}
            </button>
          ))}
        </div>

        {/* Mapa interactivo */}
        <div className="col-span-4 flex items-center justify-center h-[550px] bg-gray-100 overflow-hidden">
          <MapChart selectedState={selectedState} onSelectState={handleSelectState} />
        </div>

        {/* Contenedor de la columna 6 */}
        <div className="col-span-1 flex flex-col h-full">
          {/* Detalle del estado y Lista de medios */}
          {selectedState && (
            <>
              <DetalleEstado
                state={stateData[selectedState]}
                className="bg-redLight flex-grow"
              />
              <ListaMedios
                media={stateData[selectedState]?.media || []}
                className="bg-blue-200 mt-2 flex-grow"
              />
            </>
          )}
        </div>

        {/* Contenedor separado para Análisis de Narrativas */}
        <div className="col-span-6">
          <AnalisisNarrativas
            narrativa={stateData[selectedState]?.narrative || ""}
            className="p-6"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>

    </section>
  );
};

export default VocesPublicas;
