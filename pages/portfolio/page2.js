import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';

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
                    <GlowingButton link="/portfolio#summary"><ArrowLeft />Retour</GlowingButton>
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</h1>
                    <div className="w-24"></div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Mise en place de GLPI</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                            GLPI (Gestionnaire Libre de Parc Informatique) permet de gérer les services informatique et d&apos;assistance d&apos;un parc informatique. Pendant ma formation en BTS à l&apos;IIA, j&apos;ai appris à mettre en place GLPI sur une machine virtuelle Debian 10 pour gérer le serveur principal (Windows Server 2019).
                        </p>
                        <Image className="mb-3 rounded mx-4 lg:mx-12" width={925} height={500} alt="" src="/img/glpi.png"></Image>
                        <p className="text-white text-justify font-light mb-2 mx-2 lg:mx-12 mt-5">
                            GLPI nous à permis, par exemple, de gérer l&apos;importance des tickets et d&apos;attribuer une règle pour prioriser les tickets qui n&apos;avait toujours pas été traité à partir d&apos;un certains temps.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Ajout d&apos;une fonctionnalité sur un site</h3>
                    <div className="flex flex-wrap mx-3 justify-around items-center w-full">
                        <p className="text-white text-justify font-light break-words mx-2 lg:mx-12 mb-3 basis-full">
                            Pour répondre à la demande d&apos;évolution d&apos;un client pendant mon stage de 1ère année, j&apos;ai réalisé une &quot;roue-menu&quot; sur le site du client.
                            Il m&apos;a fallu comprendre le fonctionnement des balises &quot;svg&quot;, et apprendre à utiliser jQuery (imposé par l&apos;entreprise). <br />
                            En fonction du clic sur la roue, le texte et le bouton change afin de créer un menu en forme de roue.
                        </p>
                        <Image className="w-1/2 mb-3 rounded lg:mx-12" width={678} height={300} alt="" src="/img/rouemenu.png"></Image>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page2;