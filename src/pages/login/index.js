import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function login() {
    const [user, setUser] = useState({})
    const [informacion, setInformacion] = useState({
        nombre: '',
        cedula: '',
        correo: '',
    })
    const router = useRouter()
    const handleChange = (e) => {
        setInformacion({ ...informacion, [e.target.name]: e.target.value })
    }
    const handleEnvio = async (e) => {
        e.preventDefault()
        const response = await crearSiniestro()
        const data = await response.json()
        await router.push({ pathname: '/mapa', query: { id: data._id } })
    }
    const crearSiniestro = async () => {
        try {
            return await fetch('http://localhost:3000/api/siniestro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(informacion),
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <Head>
                <title>eStreet | Entrar</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/consejos">
                                <a className="elementosSideBar">Consejos</a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex items-center w-full"
                        style={{ backgroundImage: 'url("../background.png")' }}
                    >
                        <form className="w-full" onSubmit={handleEnvio}>
                            <div className="flex-grow">
                                <div className="contenedorInputs">
                                    <div className="contenedorInput">
                                        <label className="label">Nombre:</label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nombre"
                                            name="nombre"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contenedorInput">
                                        <label className="label">Email:</label>
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            name="correo"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contenedorInput">
                                        <label className="label">Cédula:</label>
                                        <input
                                            type="number"
                                            className="input"
                                            placeholder="Cédula"
                                            name="cedula"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="contenedorBoton">
                                    <button className="btn">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
