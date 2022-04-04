import Head from 'next/head'
import Link from 'next/link'
import { FastArrowDown } from 'iconoir-react'
import { useEffect, useState } from 'react';
import GlowingButton from '../../components/glowingButton';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';


const Home = () => {
    const { value } = useLoginContext();



    const [visibility, setVisibility] = useState('opacity-100');

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 300) {
            setVisibility('opacity-0');
        }
        else {
            setVisibility('opacity-100');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!value) {
        return <Redirect />
    }

    return <>
        <Head>
            <title>Victor G. - Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex h-full flex-col justify-center items-center pt-5">
                <div className="h-5/6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-white text-6xl">Portfolio</h1>
                    <h2 className="font-light text-2xl text-white">Victor Girault</h2>
                </div>
                <Link href="#summary">
                    <div className={"text-white font-extralight transition duration-150 hover:cursor-pointer " + visibility}>
                        <p>Scroll to see all pages</p>
                        <FastArrowDown className="mx-auto" height={38} width={38} strokeWidth={0.8} />
                    </div>
                </Link>
            </div>

        </div>
        <div className="h-screen bg-gray-900 flex justify-around items-center flex-wrap" id="summary">
            <div className="flex flex-wrap justify-around items-center w-screen">
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page1">Gérer le patrimoine informatique</GlowingButton>
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page2">Répondre aux incidents et aux demandes d’assistance et d’évolution</GlowingButton>
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page3">Développer la présence en ligne de l’organisation</GlowingButton>
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page4">Travailler en mode projet</GlowingButton>
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page5">Mettre à disposition des utilisateurs un service informatique</GlowingButton>
                <GlowingButton classes="mb-6 w-64 h-full mx-4" link="/portfolio/page6">Organiser son développement professionnel</GlowingButton>
            </div>

        </div>
    </>
}

export default Home;