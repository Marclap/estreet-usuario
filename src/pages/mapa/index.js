import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

export default function mapa({ id }) {
    console.log(id)
    const MapWithNoSSR = dynamic(() => import('../../components/MapView'), {
        ssr: false,
    })
    return (
        <>
            <Head>
                <title>eStreet</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/mapa">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                    </div>
                    <div className="flex-grow">
                        <main>
                            <div id="map">
                                <MapWithNoSSR idUser={id} />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

mapa.getInitialProps = ({ query }) => {
    const { id } = query
    return { id }
}
