import GlowingButton from "../../components/glowingButton";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';
import BackButton from "../../components/backButton";

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
                    <BackButton link="/portfolio/#summary" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Organiser son développement professionnel</h1>
                    <div className="lg:w-[115px] w-[50px]"></div>

                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Gestion d&apos;un compte LinkedIn</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <div className="lg:w-1/2 flex flex-col items-center">
                            <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                                Afin de me créer un réseau avant même de rentrer dans le monde du travail, mais aussi pour rester en contact avec les intervenants que j&apos;ai rencontré, j&apos;ai créer un compte LinkedIn. <br />Ce compte permettera d&apos;afficher à mes potentiels futurs recruteurs, mes compétences et mes expériences dans le domaine du developpement.
                            </p>
                            <GlowingButton link="https://www.linkedin.com/in/victorgirault/" classes="mt-4">Mon compte LinkedIn</GlowingButton>
                        </div>

                        <Image className="mb-3 rounded mx-4 lg:mx-12" width={300} height={300} quality="100" alt="" src="/img/qrcode.png"></Image>
                    </div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Développement de mon portfolio</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <Image className="mb-3 rounded mx-4" width={250} height={250} quality="100" alt="" src="/img/nextjs.png"></Image>
                        <div className="lg:w-3/5">
                            <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                                Afin de répondre aux besoins de l&apos;épreuve E4 de mon BTS SIO, j&apos;ai développer ce site web afin d&apos;afficher les différentes compétences que j&apos;ai acquises durant ma formation. Ce site me permettera aussi, plus tard, d&apos;afficher les projets auxquels j&apos;ai participé en tant que développeur. De plus, étant réalisé en Next.js, un framework que je ne connaisait pas avant, ce site m&apos;a permis de développer mes connaissances, notamment en Javascript.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page6;