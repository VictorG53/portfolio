import GlowingButton from "../components/glowingButton";
import Head from 'next/head';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Page not found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center">
                <h1 className="text-white font-medium text-6xl text-center">404</h1>
                <p className="text-white font-extralight text-sm text-center">Page not found</p>
                <GlowingButton link="/" classes="mt-10">Home</GlowingButton>
            </div>
        </>
    )
}

export default Custom404;
