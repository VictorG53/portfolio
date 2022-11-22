import Head from 'next/head';
import React from 'react'
const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Victor G. - Personnal Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900">
                <h1 className="text-white text-center text-3xl font-bold">Victor Girault</h1>
                <h2 className="text-xl text-center text-white tracking-wider">Student in developpment</h2>
            </div>
        </React.Fragment>
    )
}

export default Index;
