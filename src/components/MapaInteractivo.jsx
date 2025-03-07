import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mexicoMap from "../data/mexico.json"; // Archivo de México
import worldMap from "../data/land-50m.json"; // Archivo con todos los países

const MapChart = ({ selectedState, onSelectState }) => {
  // Lista de claves CVE_ENT para los estados específicos
  const highlightedStates = ["14", "19", "08", "28", "10", "05", "30"];

  return (
    <div className="h-auto mx-auto bg-darkBlue2 flex items-center justify-center">
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1300, // Ajusta la escala según tus necesidades
          center: [-100, 23.5], // Centra el mapa en México
        }}
        className="w-full h-[650px]"    
      >
        
        {/* Capa de fondo: Mapa mundial */}
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#3D4972", // Color más oscuro para el fondo
                    stroke: "#000",
                    strokeWidth: 0.3,
                    pointerEvents: "none", // Deshabilita la interacción
                  },
                  hover: {
                    fill: "#3D4972", // Igual al estado default, sin cambios
                  },
                
                }}
              />
            ))
          }
        </Geographies>

        {/* Capa superior: Mapa de México */}
        <Geographies geography={mexicoMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cveEnt = geo.properties.CVE_ENT;
              const isHighlighted = highlightedStates.includes(cveEnt);
              const isSelected = cveEnt === selectedState;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelectState(cveEnt)} // Selección por clic
                  style={{
                    default: {
                      fill: isSelected
                      ? "#E58076" // Color seleccionado
                      : isHighlighted
                      ? "#B3C5E5" // Color destacado
                      : "#6E80B7", // Color por defecto
                    stroke: "#3D4972",
                    strokeWidth: 1,
                    pointerEvents: isHighlighted ? "auto" : "none",
                    },
                    hover: {
                      fill: "#E58076",
                      stroke:"#2B3049",
                    
                    },
              
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      </div>
    
  );
};

export default MapChart;
