const DetalleEstado = ({ state }) => {

    return (
        <div className="col-span-1 flex flex-col items-center  bg-darkBlue2 h-[150px] ">

            <div className="bg-redLight w-full items-center justify-center flex">
                <h3 className="font-fira font-medium text-lg text-darkBlue py-2 flex">
                    Notas Analizadas
                </h3>
            </div>
            <div className="flex flex-col items-center mt-4">
                <p className="font-fira font-medium text-2xl text-white">{state?.name || ""}</p>
                <p className="font-fira font-medium text-3xl text-palePink italic">
                {(state?.notes?.toLocaleString() || "0") + " notas"} </p>
            </div>
        </div>
    );
};

export default DetalleEstado;