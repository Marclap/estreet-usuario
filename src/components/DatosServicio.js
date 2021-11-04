export default function DatosServicios({
    load,
    handleSetDatosAnterior,
    handleInputChange,
}) {
    const none = load == true ? '' : 'hidden'
    return (
        <>
            <div className={none + ' flex items-center justify-center'}>
                <div className="container">
                    <div className="flex justify-center p-4 mb-10">
                        <h3 className="text-xl">Describe el siniestro</h3>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white shadow-xl rounded-lg w-1/2">
                            <div className="w-full m-1">
                                <label className="ml-5">
                                    Seleccione una prioridad:
                                </label>
                                <select
                                    className="w-2/5 border bg-white rounded px-3 py-2 m-1 outline-none"
                                    name="prioridad"
                                    onChange={handleInputChange}
                                >
                                    <option value="1">Alta</option>
                                    <option value="2">Media</option>
                                    <option value="3">Baja</option>
                                </select>
                            </div>
                            <div>
                                <label className="ml-5 mb-2">
                                    De una descripción de lo que esta
                                    ocurriendo:
                                </label>
                                <div className="flex justify-center mt-1">
                                    <textarea
                                        name="descripcion"
                                        onChange={handleInputChange}
                                        className="w-11/12 h-80 px-3 py-2 text-bloodRed border border-richBlackFogra rounded-lg focus:outline-none"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="contenedorBoton">
                                    <button
                                        onClick={handleSetDatosAnterior}
                                        className="btn"
                                        type="button"
                                    >
                                        Anterior
                                    </button>
                                </div>
                                <div className="contenedorBoton">
                                    <button className="btn" type="submit">
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
