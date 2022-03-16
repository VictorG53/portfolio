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
                    <h1 className="text-white text-3xl font-bold">Victor Girault</h1>
                    <h2 className="text-xl text-white tracking-wider">Student in computer development</h2>
                    <h3 className="text-md mt-10 text-white font-extralight">Content coming soon</h3>
                </div>
                <div className=" flex justify-center items-end h-1/6">
                    <h3 className="text-white font-extralight">© 2022 Victor Girault</h3>
                </div>
            </div>
        </>
    )
}

export default Index;
