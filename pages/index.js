import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-800">
                <div className="flex flex-col justify-center items-center h-2/3">
                    <h1 className="text-white text-5xl font-medium">Portfolio</h1>
                    <h2 className="text-white text-3xl font-light">Victor Girault</h2>
                </div>
                <div className="h-1/3 flex justify-around items-start">
                    <Link href="/about">
                        <div className="transition ease-in-out hover:bg-gray-700 px-5 py-2 rounded-lg drop-shadow border-4 border-gray-700 hover:cursor-pointer">
                            <a className="text-white text-xl">About Me</a>
                        </div>
                    </Link>
                    <Link href="/veille">
                        <div className="transition ease-in-out hover:bg-gray-700 px-5 py-2 rounded-lg drop-shadow border-4 border-gray-700 hover:cursor-pointer">
                            <a className="text-white text-xl">Veille Technologique</a>
                        </div>
                    </Link>
                    <Link href="/e4">
                        <div className="transition ease-in-out hover:bg-gray-700 px-5 py-2 rounded-lg drop-shadow border-4 border-gray-700 hover:cursor-pointer">
                            <a className="text-white text-xl">E4</a>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Index;
