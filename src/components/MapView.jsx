import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import Link from 'next/link'

const MySwal = withReactContent(Swal)

const Map = ({ idUser }) => {
    const [latitud, setLatitud] = useState(0)
    const [longitud, setLongitud] = useState(0)
    if (!('geolocation' in navigator)) {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'eStreet',
            icon: 'error',
        }).then(() => {
            return MySwal.fire(
                <p>
                    Su dispositivo no tiene la funcionalidad para la
                    geolocalización.
                </p>
            )
        })
    }

    /* se ejecuta si los permisos son concedidos y se encuentra una ubicación*/
    function onSucccess(position) {
        setLatitud(position.coords.latitude)
        setLongitud(position.coords.longitude)
    }

    /*se ejecuta si el permiso fue denegado o no se puede encontrar una ubicación*/
    function onError() {
        console.log('ocurrio un error o no hay permisos para ver la ubicación')
    }

    const config = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    }
    /*así llamamos la función getCurrentPosition*/
    navigator.geolocation.getCurrentPosition(onSucccess, onError, config)
    const position = [latitud, longitud]

    if (longitud != 0 && latitud != 0) {
        return (
            <>
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={true}
                    style={{ height: '100vh', width: '100%' }}
                >
                    <TileLayer
                        url={
                            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        }
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} draggable={false}>
                        <Popup>Tu ubicación actual</Popup>
                    </Marker>
                </MapContainer>
                <Link
                    href={{
                        pathname: '/reporte',
                        query: {
                            latitud,
                            longitud,
                            idUser,
                        },
                    }}
                >
                    <a
                        className="absolute btn"
                        style={{
                            bottom: '32px',
                            right: 'calc(100% / 2 - 16rem)',
                            zIndex: 999,
                        }}
                    >
                        Reportar
                    </a>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <div className="h-screen flex justify-center items-center">
                    <div className="spinner">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </>
        )
    }
}

export default Map
