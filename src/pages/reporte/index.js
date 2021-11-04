import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import DatosServicios from '../../components/DatosServicio'
import SeleccionarServicio from '../../components/SeleccionarServicio'
import Swal from 'sweetalert2'

export default function reporte({ latitud, longitud, idUser }) {
    const [servicio, setServicio] = useState(true)
    const [datos, setDatos] = useState(false)
    const [idEnte, setIdEnte] = useState(null)
    const [informacion, setInformacion] = useState({
        ente: '',
        prioridad: 1,
        descripcion: '',
        latitud,
        longitud,
        idEnte,
    })
    const alerta = () => {
        Swal.fire({
            title: 'ÉXITO',
            text: 'Su reporte fue enviado con éxito',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
        })
    }
    /* Ayuda a cambiar de pantalla entre seleccionar servicio y seleccionar siniestro*/
    const handleSetServicio = () => {
        setServicio(false)
        setDatos(true)
    }
    /* Ayuda a cambiar de pantalla entre seleccionar servicio y seleccionar siniestro*/
    const handleSetDatosAnterior = () => {
        setServicio(true)
        setDatos(false)
    }
    const handleSetDatosGuardar = (event) => {
        event.preventDefault()
        ingresarDatos()
        alerta()
        Router.push('/login')
    }
    const ingresarDatos = async () => {
        try {
            return await fetch(
                'http://localhost:3000/api/siniestro/' + idUser,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(informacion),
                }
            )
        } catch (error) {
            console.error(error)
        }
    }
    /* Actualiza los datos cuando se actualiza el valor de los inputs*/
    const handleInputChange = (event) => {
        setInformacion({
            ...informacion,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
            <Head>
                <title>eStreet | Reporte</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                    </div>
                    <div className="flex-grow h-screen">
                        <form onSubmit={handleSetDatosGuardar}>
                            <SeleccionarServicio
                                load={servicio}
                                handleSetServicio={handleSetServicio}
                                handleInputChange={handleInputChange}
                            />
                            <DatosServicios
                                load={datos}
                                handleSetDatosAnterior={handleSetDatosAnterior}
                                handleInputChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

reporte.getInitialProps = ({ query }) => {
    const { latitud, longitud, idUser } = query
    return { latitud, longitud, idUser }
}
