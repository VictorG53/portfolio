import Head from 'next/head'

const Home = () => {
    return <>
        <Head>
            <title>Victor G. - Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex h-full flex-col justify-center items-center pt-5">
                <div className="h-5/6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-white text-6xl">Portfolio</h1>
                    <h2 className="font-light text-2xl text-white">Victor Girault</h2>
                </div>
            </div>

        </div>
        <div className="h-screen bg-gray-900">

        </div>
    </>
}

export default Home;