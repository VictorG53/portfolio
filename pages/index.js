import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-800">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-white text-5xl font-semibold">Portfolio</h1>
                    <h2 className="text-white text-3xl font-normal">Victor Girault</h2>
                    <h3 className="text-white text-md font-light">BTS SIO SLAM</h3>
                </div>
            </div>
        </>
    )
}

export default Index;
