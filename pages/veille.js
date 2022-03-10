import Head from 'next/head';
import Link from 'next/link'

const Veille = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Veille Technologique</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-800">
                <div className="flex justify-center">
                    <h1 className="mt-4 text-white text-2xl">Veille Technologique</h1>
                </div>
            </div>
        </>
    )
}

export default Veille;