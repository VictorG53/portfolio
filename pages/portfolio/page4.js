import BackButton from "../../components/backButton";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';

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
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <BackButton link="/portfolio/#summary" />
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Travailler en mode projet</h1>
                    <div className="lg:w-[115px] w-[50px]"></div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Réalisation d&apos;un diagramme de Gantt</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                            Le diagramme de Gantt permet d&apos;ordonner la gestion d&apos;un projet en divisant le projet en plusieurs tâches, dépendantes ou non les unes des autres. Pour le projet Megacasting, nous avons eu à réaliser un diagramme de Gantt afin de visualiser le temps qu&apos;il faudrait prendre pour réaliser les tâches du projet Megacasting.
                        </p>
                        <Image className="mb-3 rounded mx-4 lg:mx-12" width={1000} height={350} quality="100" layout="intrinsic" alt="" src="/img/gantt.png"></Image>
                        <p className="text-white text-justify font-light mb-2 mx-2 lg:mx-12 mt-5">
                            Le diagramme ci-dessus est le diagramme qui à été réaliser pour le projet Megacasting.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page4;