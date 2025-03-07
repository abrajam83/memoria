const MapaInteractivo = ({ estadoSeleccionado, onSeleccionarEstado }) => {
    // Reutiliza tu lógica actual y añade una función para manejar clics
    const manejarClicEnMapa = (estadoId) => {
      onSeleccionarEstado(estadoId); // Llama al callback con el ID del estado
    };
  
    return (
      <ComposableMap
      projection="geoMercator"
        projectionConfig={{
          scale: 1300, // Ajusta la escala según tus necesidades
          center: [-100, 23.5], // Centra el mapa en México
        }}
        className="w-full h-[650px]" 
      >
    
        {/* Capa superior: Mapa de México */}
        <Geographies geography={mexicoMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
            const isSelected = estadoSeleccionado === geo.properties.CVE_ENT;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => manejarClicEnMapa(geo.properties.CVE_ENT)} // Selección por clic
                  style={{
                    default: { fill: isSelected ? "#E58076" : "#6E80B7" },
                    hover: { fill: "#E58076" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    );
  };
  
  export default MapaInteractivo;
  