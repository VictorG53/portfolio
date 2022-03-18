import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Personnal Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="flex flex-col justify-center items-center h-5/6 w-full">
                    <h1 className="text-white text-center text-3xl font-bold">Victor Girault</h1>
                    <h2 className="text-xl text-center text-white tracking-wider">Student in computer development</h2>
                    <Link href="/portfolio">
                        <div className="hover:cursor-pointer mt-12 px-6 py-2 border text-white rounded hover:bg-white transition hover:text-gray-900 hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">Voir le Portfolio</div>
                    </Link>
                </div>
                <div className=" flex justify-center items-end h-1/6">
                    <h3 className="text-white text-center font-extralight">© 2022 Victor Girault</h3>
                </div>
            </div>
        </>
    )
}

export default Index;
