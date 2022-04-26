import Head from 'next/head';
import BackButton from "../../components/backButton";
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';

const Page5 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Mettre à disposition des utilisateurs un service informatique</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <BackButton link="/portfolio/#summary" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Mettre à disposition des utilisateurs un service informatique</h1>
                    <div className="lg:w-[115px] w-[50px]"></div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Déploiement du site Megacasting</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12 w-1/2">
                            Afin de mettre en ligne le site de Megacasting, j&apos;ai du utiliser Deployer pour le deploiement du site.
                            Le site à été developpé sur une machine WSL sur mon pc personnel et le site devait être deployer sur une machine virtuelle hébergé sur le réseaux de l&apos;IIA (OpenNebula). Deployer m&apos;a donc permis de configurer et de réaliser le deploiement du site sur la VM.
                        </p>
                        <Image className="mb-3 rounded mx-6 lg:mx-12" width={350} height={250} quality="100" layout="intrinsic" alt="" src="/img/deployer.png"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page5;