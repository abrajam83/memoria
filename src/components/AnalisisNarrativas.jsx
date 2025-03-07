const AnálisisNarrativas = ({ narrativa }) => {
    return (
      <div className=" bg-paleBlue rounded-b-lg p-20">
        <h3 className="font-fira font-bold text-lg mb-6">Análisis de Narrativas:</h3>
        {narrativa.map((paragraph, index) => (
    <p key={index} className="mb-4 font-fira text-md leading-relaxed">
      {paragraph}
    </p>
    ))}
      </div>
    );
  };
  
  export default AnálisisNarrativas;
  

