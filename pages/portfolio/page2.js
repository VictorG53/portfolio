import BackButton from "../../components/backButton";
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
                <title>Victor G. - Répondre aux incidents et aux demandes d’assistance et d’évolution</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-900">
                <div className="w-full p-3 flex items-start">
                    <BackButton link="/portfolio#summary" />
                    <h1 className="text-3xl mx-auto text-white self-center text-center">Répondre aux incidents <br /> et aux demandes d’assistance <br /> et d’évolution</h1>
                </div>
            </div>
        </>
    )
}

export default Page2;