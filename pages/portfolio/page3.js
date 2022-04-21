import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';

const Page3 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Développer la présence en ligne de l&apos;organisation</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <GlowingButton link="/portfolio#summary"><ArrowLeft />Retour</GlowingButton>
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Développer la présence en ligne de l&apos;organisation</h1>
                    <div className="w-24"></div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Création du site internet Megacasting</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                            Pour le projet Megacasting, j'ai eu à créer le site de l'entreprise pour permettre aux artistes de trouver des castings en ligne. Ce site permet aux artistes de créer un compte et de s'y connecter pour pouvoir postuler directement aux castings qui les intérèssent. Il permet aussi aux artistes de voir à quels castings ils ont déja postuler.
                        </p>
                        <Image className="mb-3 rounded mx-4 lg:mx-12" width={1130} height={500} alt="" src="/img/megacasting_website.png"></Image>
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12 mt-5">
                            Le site permet de rechercher et filtrer les castings qui ont été validé auprès des employés de Megacasting (grâce à l'application de gestion de base de donnée).
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3;