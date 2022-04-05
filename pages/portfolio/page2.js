import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';

const Page2 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <GlowingButton link="/portfolio#summary"><ArrowLeft /> Back</GlowingButton>
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</h1>
                </div>
            </div>
        </>
    )
}

export default Page2;