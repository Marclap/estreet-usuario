export default function SeleccionarServicio({
    load,
    handleSetServicio,
    handleInputChange,
}) {
    const none = load == true ? '' : 'hidden'
    return (
        <>
            <div className={none + ' flex items-center justify-center'}>
                <div className="container">
                    <div className="flex justify-center p-4 mb-10">
                        <h3 className="text-xl">Seleccione el ente</h3>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white shadow-xl rounded-lg w-1/2">
                            <ul className="divide-y divide-gray-300">
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            className="checkbox"
                                            name="ente"
                                            onChange={handleInputChange}
                                            value="Policia Nacional"
                                        />
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={'/Policia nacional.jpg'}
                                        />
                                        <span>Policia Nacional</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            className="checkbox"
                                            name="ente"
                                            onChange={handleInputChange}
                                            value="Bomberos Pereira"
                                        />
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={'/Bomberos Pereira.jpg'}
                                        />
                                        <span>Bomberos Pereira</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            className="checkbox"
                                            name="ente"
                                            onChange={handleInputChange}
                                            value="Defensa Civil Colombiana"
                                        />
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={
                                                '/Defensa Civil Colombiana.jpg'
                                            }
                                        />
                                        <span>Defensa Civil Colombiana</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            className="checkbox"
                                            name="ente"
                                            onChange={handleInputChange}
                                            value="Tránsito Pereira"
                                        />
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={'/Tránsito Pereira.jpg'}
                                        />
                                        <span>Tránsito Pereira</span>
                                    </label>
                                </li>
                                <li className="p-4 m-1 hover:bg-gray-50 cursor-pointer">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            className="checkbox"
                                            name="ente"
                                            onChange={handleInputChange}
                                            value="Servicio Ambulancias S.A.P"
                                        />
                                        <img
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={
                                                '/Servicio Ambulancias S.A.P.jpg'
                                            }
                                        />
                                        <span>Servicio Ambulancias S.A.P</span>
                                    </label>
                                </li>
                            </ul>
                            <div className="contenedorBoton">
                                <button
                                    onClick={handleSetServicio}
                                    className="btn"
                                    type="button"
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
