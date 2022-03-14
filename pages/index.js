import Head from 'next/head'
import Link from 'next/link'
import MenuCard from '../components/menuCard';

const Index = () => {
    return (
        <>
            <Head>
                <title>Victor G. - Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-800">
                <div className="flex flex-col justify-center items-center h-1/2">
                    <h1 className="text-white text-5xl font-semibold">Portfolio</h1>
                    <h2 className="text-white text-3xl font-normal">Victor Girault</h2>
                    <h3 className="text-white text-md font-light">BTS SIO SLAM</h3>
                </div>
                <div className="h-1/2">
                    <div className="flex justify-around w-screen items-center">
                        <MenuCard titre="À propos" link="/about">Pour en savoir plus sur mon parcours et mes connaiscances.</MenuCard>
                        <MenuCard titre="Veille Technologique" link="/veille">Une veille est une activité consistant à rester au courant des dernières avancées et informations sur un secteur donné.</MenuCard>
                        <MenuCard titre="Épreuve E4" link="/e4">Épreuve du BTS SIO consistant à répondre à une problématique.</MenuCard>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index;
