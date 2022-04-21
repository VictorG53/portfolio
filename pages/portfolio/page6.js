import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';

const Page6 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Organiser son développement professionnel</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <GlowingButton link="/portfolio#summary"><ArrowLeft />Retour</GlowingButton>
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Organiser son développement professionnel</h1>
                    <div className="w-24"></div>
                </div>
            </div>
        </>
    )
}

export default Page6;