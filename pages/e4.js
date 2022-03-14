import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'iconoir-react';

const E4 = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Epreuve E4</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-800">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <div className="flex justify-center items-center text-xl text-white border rounded-lg w-max px-4 py-2 hover:text-gray-800 hover:bg-white transition ease-in-out hover:cursor-pointer"><ArrowLeft height={24} width={24} strokeWidth={2} />Retour</div>
                    </Link>
                    <h1 className="text-white text-2xl">Epreuve E4</h1>
                </div>
            </div>
        </>
    )
}

export default E4;