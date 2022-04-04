import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';

const Page4 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Travailler en mode projet</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full h-screen bg-gray-900">
                <div className="w-full p-3 flex items-start">
                    <GlowingButton link="/portfolio#summary"><ArrowLeft /> Back</GlowingButton>
                    <h1 className="text-3xl mx-auto text-white self-center text-center">Travailler en mode projet</h1>
                </div>
            </div>
        </>
    )
}

export default Page4;