import BackButton from "../../components/backButton";
import Head from 'next/head';

const page1 = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Gérer le patrimoine informatique</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-900">
                <div className="w-full p-3 flex items-start">
                    <BackButton link="/portfolio#summary" />
                    <h1 className="text-3xl mx-auto text-white self-center text-center">Gérer le patrimoine <br /> informatique</h1>
                </div>
            </div>
        </>
    )
}

export default page1;