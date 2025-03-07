const ListaMedios = ({ media, className }) => {
    return (
      <div className={`flex flex-col items-center justify-between ${className}`}>
        <div className="bg-redLight w-full items-center justify-center flex">
          <h3 className="font-fira font-medium text-lg text-darkBlue py-2 flex">
            Medios </h3>
        </div>
        <div className="bg-darkBlue2 flex-grow h-full flex items-center justify-center w-full">
          <ul className="list-disc pl-5">
            {media.map((medio, index) => (
              <li key={index} className="font-fira  text-white text-md">
                {medio}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default ListaMedios;
